import { spawn } from 'node:child_process';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const outDir = path.resolve('research/omai');
const port = 9224;

const pages = [
  ['home', 'https://omaivillas.com/'],
  ['about', 'https://omaivillas.com/about/'],
  ['destinations', 'https://omaivillas.com/destinations/'],
  ['experiences', 'https://omaivillas.com/experiences/'],
  ['studio', 'https://omaivillas.com/omai-studio/'],
  ['contact', 'https://omaivillas.com/contact/'],
  ['zile', 'https://omaivillas.com/villas/omai-zile/'],
  ['st-barth', 'https://omaivillas.com/villas/omai-st-barth/'],
  ['grey', 'https://omaivillas.com/villas/omai-grey/'],
];

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function waitForPageTarget() {
  for (let i = 0; i < 80; i += 1) {
    try {
      const response = await fetch(`http://127.0.0.1:${port}/json/list`);
      if (response.ok) {
        const targets = await response.json();
        const page = targets.find((target) => target.type === 'page');
        if (page) return page;
      }
    } catch {
      await wait(250);
    }
  }
  throw new Error('Chrome page target did not start.');
}

function connect(url) {
  const socket = new WebSocket(url);
  const listeners = new Map();
  let nextId = 1;

  socket.addEventListener('message', (event) => {
    const data = JSON.parse(event.data);
    if (data.id && listeners.has(data.id)) {
      listeners.get(data.id)(data);
      listeners.delete(data.id);
    }
  });

  return new Promise((resolve, reject) => {
    socket.addEventListener('open', () => {
      resolve({
        send(method, params = {}) {
          const id = nextId;
          nextId += 1;
          socket.send(JSON.stringify({ id, method, params }));
          return new Promise((innerResolve, innerReject) => {
            listeners.set(id, (data) => {
              if (data.error) innerReject(new Error(data.error.message));
              else innerResolve(data.result);
            });
          });
        },
        close() {
          socket.close();
        },
      });
    });
    socket.addEventListener('error', reject);
  });
}

async function capturePage(client, name, url) {
  await client.send('Page.navigate', { url });
  await wait(9000);

  await client.send('Runtime.evaluate', {
    awaitPromise: true,
    expression: `
      (async () => {
        const accept = Array.from(document.querySelectorAll('button, a'))
          .find((node) => /accept/i.test(node.textContent || ''));
        if (accept) accept.click();
        window.scrollTo(0, 1);
        await new Promise((resolve) => setTimeout(resolve, 1500));
        document.querySelectorAll('img').forEach((img) => {
          img.loading = 'eager';
          if (img.dataset && img.dataset.src && !img.src) img.src = img.dataset.src;
        });
        await Promise.allSettled(
          Array.from(document.images).map((img) => {
            if (img.complete && img.naturalWidth > 0) return Promise.resolve();
            return img.decode ? img.decode() : Promise.resolve();
          })
        );
        await new Promise((resolve) => setTimeout(resolve, 3500));
        window.scrollTo(0, 0);
      })()
    `,
  });

  const screenshot = await client.send('Page.captureScreenshot', {
    format: 'png',
    fromSurface: true,
    captureBeyondViewport: false,
  });
  await writeFile(path.join(outDir, `${name}.png`), Buffer.from(screenshot.data, 'base64'));
  console.log(`captured ${name}`);
}

await mkdir(outDir, { recursive: true });

const chrome = spawn(chromePath, [
  '--headless=new',
  '--disable-gpu',
  '--no-sandbox',
  '--hide-scrollbars',
  '--disable-crash-reporter',
  '--disable-crashpad',
  '--disable-features=LazyFrameLoading,LazyImageLoading',
  '--disable-blink-features=AutomationControlled',
  `--remote-debugging-port=${port}`,
  `--user-data-dir=C:\\tmp\\spetia-chrome-cdp-${Date.now()}`,
  '--window-size=1440,2200',
  'about:blank',
]);

try {
  const pageTarget = await waitForPageTarget();
  const client = await connect(pageTarget.webSocketDebuggerUrl);
  await client.send('Page.enable');
  await client.send('Runtime.enable');
  await client.send('Network.enable');

  for (const [name, url] of pages) {
    await capturePage(client, name, url);
  }

  client.close();
} finally {
  chrome.kill();
}

import { spawn } from 'node:child_process';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const outDir = path.resolve('research');
const port = 9225;
const baseUrl = process.argv[2] || 'http://127.0.0.1:3001';

const shots = [
  {
    name: 'local-home-desktop',
    url: `${baseUrl}/`,
    metrics: { width: 1440, height: 900, deviceScaleFactor: 1, mobile: false },
  },
  {
    name: 'local-home-mobile',
    url: `${baseUrl}/`,
    metrics: { width: 390, height: 1200, deviceScaleFactor: 2, mobile: true },
  },
  {
    name: 'local-work-desktop',
    url: `${baseUrl}/work`,
    metrics: { width: 1440, height: 1000, deviceScaleFactor: 1, mobile: false },
  },
  {
    name: 'local-contact-mobile',
    url: `${baseUrl}/contact`,
    metrics: { width: 390, height: 1200, deviceScaleFactor: 2, mobile: true },
  },
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

async function capture(client, shot) {
  await client.send('Emulation.setDeviceMetricsOverride', shot.metrics);
  await client.send('Emulation.setUserAgentOverride', {
    userAgent: shot.metrics.mobile
      ? 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1'
      : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126 Safari/537.36',
  });
  await client.send('Page.navigate', { url: shot.url });
  await wait(4500);
  const screenshot = await client.send('Page.captureScreenshot', {
    format: 'png',
    fromSurface: true,
    captureBeyondViewport: false,
  });
  await writeFile(path.join(outDir, `${shot.name}.png`), Buffer.from(screenshot.data, 'base64'));
  console.log(`captured ${shot.name}`);
}

await mkdir(outDir, { recursive: true });

const chrome = spawn(chromePath, [
  '--headless=new',
  '--disable-gpu',
  '--no-sandbox',
  '--hide-scrollbars',
  '--disable-crash-reporter',
  '--disable-crashpad',
  `--remote-debugging-port=${port}`,
  `--user-data-dir=C:\\tmp\\spetia-local-cdp-${Date.now()}`,
  'about:blank',
]);

try {
  const pageTarget = await waitForPageTarget();
  const client = await connect(pageTarget.webSocketDebuggerUrl);
  await client.send('Page.enable');
  await client.send('Runtime.enable');

  for (const shot of shots) {
    await capture(client, shot);
  }

  client.close();
} finally {
  chrome.kill();
}

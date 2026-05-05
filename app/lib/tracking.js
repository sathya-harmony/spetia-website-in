'use client';

function makeEventId(eventName) {
  const suffix =
    typeof crypto !== 'undefined' && crypto.randomUUID
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(16).slice(2)}`;
  return `spetia-${eventName}-${suffix}`;
}

export function trackEvent(eventName, payload = {}) {
  if (typeof window === 'undefined') return null;

  const eventId = makeEventId(eventName);
  const eventPayload = {
    ...payload,
    event_id: eventId,
    page_path: window.location.pathname,
  };

  if (typeof window.fbq === 'function') {
    window.fbq('trackCustom', eventName, eventPayload, { eventID: eventId });
    if (eventName === 'CTA_Click') {
      window.fbq('track', 'Lead', { value: 1 }, { eventID: eventId });
    }
  }

  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, eventPayload);
  }

  const body = JSON.stringify({
    eventName,
    eventId,
    eventSourceUrl: window.location.href,
    payload,
  });

  if (navigator.sendBeacon) {
    const blob = new Blob([body], { type: 'application/json' });
    navigator.sendBeacon('/api/events', blob);
  } else {
    fetch('/api/events', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body,
      keepalive: true,
    }).catch(() => {});
  }

  return eventId;
}

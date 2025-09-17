// src/lib/alternates.ts
export function renderAlternateScript(alternate: { de: string; en: string }) {
  // JSON.stringify ensures safe encoding
  const json = JSON.stringify(alternate);
  return `window.__ALTERNATE = ${json}; window.dispatchEvent(new Event('alternateReady'));`;
}

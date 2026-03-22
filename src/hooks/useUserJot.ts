import { useEffect, useRef } from 'react';

const RAW_PROJECT_ID = (import.meta.env.VITE_USERJOT_PROJECT_ID as string | undefined)?.trim();

/**
 * UserJot `uj.init()` expects the **Project ID** from the dashboard (Settings → Project),
 * e.g. `proj_…`. Using a board URL causes broken widget URLs and 404s on …/widget/v1/…
 */
function resolveUserJotProjectId(raw: string | undefined): string | null {
  if (!raw) return null;
  if (/^https?:\/\//i.test(raw) || raw.includes('userjot.com')) {
    console.error(
      '[Gourdo / UserJot] Invalid VITE_USERJOT_PROJECT_ID: use the Project ID from UserJot (Settings → Project), ' +
        'not your board URL (e.g. https://gourdo.userjot.com). Fix .env / .env.local and restart the dev server.'
    );
    return null;
  }
  return raw;
}

export const USERJOT_PROJECT_ID = resolveUserJotProjectId(RAW_PROJECT_ID);

/** Set when env has a value but it’s not a valid Project ID (e.g. a full userjot.com URL). */
export const USERJOT_ENV_INVALID =
  Boolean(RAW_PROJECT_ID) && USERJOT_PROJECT_ID === null;

export function useUserJot() {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current || !USERJOT_PROJECT_ID) return;
    initialized.current = true;

    window.$ujq = window.$ujq || [];
    window.uj =
      window.uj ||
      (new Proxy({} as UserJot, {
        get: (_target, prop: string) =>
          (...args: unknown[]) =>
            window.$ujq.push([prop, ...args]),
      }) as UserJot);

    const script = Object.assign(document.createElement('script'), {
      src: 'https://cdn.userjot.com/sdk/v2/uj.js',
      type: 'module',
      async: true,
    });
    document.head.appendChild(script);

    window.uj.init(USERJOT_PROJECT_ID, { widget: true, theme: 'auto' });
  }, []);
}

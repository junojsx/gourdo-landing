/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_USERJOT_PROJECT_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

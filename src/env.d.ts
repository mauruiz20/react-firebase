/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VIET_FIREBASE_API_KEY: string
  readonly VIET_FIREBASE_AUTH_DOMAIN: string
  readonly VIET_FIREBASE_PROJECT_ID: string
  readonly VIET_FIREBASE_STORAGE_BUCKET: string
  readonly VIET_FIREBASE_MESSAGING_SENDER_ID: string
  readonly VIET_FIREBASE_APP_ID: string
  readonly VIET_FIREBASE_MEASUREMENT_ID: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

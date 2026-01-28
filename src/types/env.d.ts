/**
 * Environment variable type declarations
 * Provides TypeScript support for .env variables
 */

declare module '@env' {
  export const API_URL: string;
  export const API_TIMEOUT: string;
  export const APP_ENV: 'development' | 'staging' | 'production';
  export const ENABLE_ANALYTICS: string;
  export const ENABLE_CRASH_REPORTING: string;
  export const ENABLE_DEBUG: string;
}

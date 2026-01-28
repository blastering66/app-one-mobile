/**
 * Environment Configuration
 *
 * Centralized environment variables with type safety.
 * Uses react-native-dotenv for .env file support.
 *
 * Usage:
 * 1. Create a .env file in the project root
 * 2. Add your variables (e.g., API_URL=https://api.example.com)
 * 3. Import from this file: import { API_BASE_URL } from '@config/env';
 */

// Default values (used when env vars are not defined)
const DEFAULT_API_URL = 'https://api.example.com';
const DEFAULT_API_TIMEOUT = 30000; // 30 seconds

/**
 * Get environment variable with fallback
 * In production, these would come from .env files
 */
export const API_BASE_URL: string = process.env.API_URL ?? DEFAULT_API_URL;

export const API_TIMEOUT: number =
  Number(process.env.API_TIMEOUT) || DEFAULT_API_TIMEOUT;

export const APP_ENV: 'development' | 'staging' | 'production' =
  (process.env.APP_ENV as 'development' | 'staging' | 'production') ??
  'development';

export const IS_DEV = APP_ENV === 'development';
export const IS_PROD = APP_ENV === 'production';

/**
 * Feature flags (can be controlled via env vars)
 */
export const FEATURES = {
  enableAnalytics: process.env.ENABLE_ANALYTICS === 'true',
  enableCrashReporting: process.env.ENABLE_CRASH_REPORTING === 'true',
  enableDebugMode: IS_DEV || process.env.ENABLE_DEBUG === 'true',
} as const;

/**
 * Validate required environment variables
 * Call this in your app initialization
 */
export const validateEnv = (): boolean => {
  const required: string[] = [
    // Add required env vars here
    // 'API_KEY',
  ];

  const missing = required.filter(key => !process.env[key]);

  if (missing.length > 0 && IS_PROD) {
    console.error(
      `Missing required environment variables: ${missing.join(', ')}`,
    );
    return false;
  }

  return true;
};

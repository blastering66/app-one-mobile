/**
 * Global Type Definitions
 *
 * Contains shared types used across the application.
 */

/**
 * Common API pagination params
 */
export interface PaginationParams {
  page: number;
  limit: number;
}

/**
 * Paginated response wrapper
 */
export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
}

/**
 * Generic async state for data fetching
 */
export interface AsyncState<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

/**
 * Common form field state
 */
export interface FormField<T> {
  value: T;
  error?: string;
  touched: boolean;
}

/**
 * Navigation event types (extend as needed)
 */
export type DeepLinkEvent = {
  url: string;
  screen: string;
  params?: Record<string, unknown>;
};

/**
 * API Service
 *
 * Centralized API client with type-safe methods.
 * Demonstrates:
 * - Generic request handling
 * - Error handling patterns
 * - Environment variable usage
 * - Type-safe responses
 */

import {API_BASE_URL, API_TIMEOUT} from '@config/env';

// Generic API response type
interface ApiResponse<T> {
  data: T;
  status: number;
  message?: string;
}

// Error response type
interface ApiError {
  message: string;
  code: string;
  status: number;
}

// Request configuration
interface RequestConfig {
  headers?: Record<string, string>;
  timeout?: number;
}

/**
 * Creates a configured fetch instance with defaults
 */
const createRequest = async <T>(
  endpoint: string,
  options: RequestInit = {},
  config: RequestConfig = {},
): Promise<ApiResponse<T>> => {
  const url = `${API_BASE_URL}${endpoint}`;
  const timeout = config.timeout ?? API_TIMEOUT;

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        ...config.headers,
        ...options.headers,
      },
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      const errorData = (await response.json()) as ApiError;
      throw new ApiServiceError(
        errorData.message ?? 'Request failed',
        response.status,
        errorData.code ?? 'UNKNOWN_ERROR',
      );
    }

    const data = (await response.json()) as T;
    return {
      data,
      status: response.status,
    };
  } catch (error) {
    clearTimeout(timeoutId);

    if (error instanceof ApiServiceError) {
      throw error;
    }

    if (error instanceof Error && error.name === 'AbortError') {
      throw new ApiServiceError('Request timeout', 408, 'TIMEOUT');
    }

    throw new ApiServiceError(
      error instanceof Error ? error.message : 'Network error',
      0,
      'NETWORK_ERROR',
    );
  }
};

/**
 * Custom error class for API errors
 */
export class ApiServiceError extends Error {
  status: number;
  code: string;

  constructor(message: string, status: number, code: string) {
    super(message);
    this.name = 'ApiServiceError';
    this.status = status;
    this.code = code;
  }
}

/**
 * API Service object with typed methods
 */
export const api = {
  /**
   * GET request
   */
  get: <T>(
    endpoint: string,
    config?: RequestConfig,
  ): Promise<ApiResponse<T>> => {
    return createRequest<T>(endpoint, {method: 'GET'}, config);
  },

  /**
   * POST request
   */
  post: <T, D = Record<string, unknown>>(
    endpoint: string,
    data: D,
    config?: RequestConfig,
  ): Promise<ApiResponse<T>> => {
    return createRequest<T>(
      endpoint,
      {
        method: 'POST',
        body: JSON.stringify(data),
      },
      config,
    );
  },

  /**
   * PUT request
   */
  put: <T, D = Record<string, unknown>>(
    endpoint: string,
    data: D,
    config?: RequestConfig,
  ): Promise<ApiResponse<T>> => {
    return createRequest<T>(
      endpoint,
      {
        method: 'PUT',
        body: JSON.stringify(data),
      },
      config,
    );
  },

  /**
   * PATCH request
   */
  patch: <T, D = Record<string, unknown>>(
    endpoint: string,
    data: D,
    config?: RequestConfig,
  ): Promise<ApiResponse<T>> => {
    return createRequest<T>(
      endpoint,
      {
        method: 'PATCH',
        body: JSON.stringify(data),
      },
      config,
    );
  },

  /**
   * DELETE request
   */
  delete: <T>(
    endpoint: string,
    config?: RequestConfig,
  ): Promise<ApiResponse<T>> => {
    return createRequest<T>(endpoint, {method: 'DELETE'}, config);
  },
};

// Example typed API functions for specific endpoints
// Extend this as your API grows

export interface User {
  id: number;
  name: string;
  email: string;
}

export const userApi = {
  getUsers: () => api.get<User[]>('/users'),
  getUser: (id: number) => api.get<User>(`/users/${id}`),
  createUser: (data: Omit<User, 'id'>) => api.post<User>('/users', data),
  updateUser: (id: number, data: Partial<User>) =>
    api.patch<User>(`/users/${id}`, data),
  deleteUser: (id: number) => api.delete<void>(`/users/${id}`),
};

/**
 * Navigation Types
 *
 * Provides type-safe navigation hooks for the entire app.
 * Import these types instead of using generic navigation hooks.
 */

import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RouteProp } from '@react-navigation/native';
import type { RootStackParamList } from './index';

// Navigation prop type for screens
export type NavigationProp<T extends keyof RootStackParamList> =
  NativeStackNavigationProp<RootStackParamList, T>;

// Route prop type for screens that receive params
export type RouteProps<T extends keyof RootStackParamList> = RouteProp<
  RootStackParamList,
  T
>;

// Combined props for screen components
export interface ScreenProps<T extends keyof RootStackParamList> {
  navigation: NavigationProp<T>;
  route: RouteProps<T>;
}

/**
 * useAppTheme Hook
 *
 * Provides consistent theming throughout the app.
 * Demonstrates:
 * - Custom hooks pattern
 * - Theme context consumption
 * - Type-safe theme values
 *
 * Why a custom hook?
 * - Centralizes theme access
 * - Can be extended to support dark mode
 * - Easy to add theme switching logic
 */

import * as React from 'react';
import {ThemeContext, Theme} from '@context/ThemeContext';

export interface ThemeColors {
  primary: string;
  primaryDark: string;
  secondary: string;
  secondaryDark: string;
  background: string;
  surface: string;
  surfacePressed: string;
  text: string;
  textSecondary: string;
  textDisabled: string;
  border: string;
  error: string;
  success: string;
  warning: string;
  disabled: string;
}

export interface ThemeSpacing {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

export interface AppTheme {
  colors: ThemeColors;
  spacing: ThemeSpacing;
  isDark: boolean;
  toggleTheme: () => void;
}

export const lightColors: ThemeColors = {
  primary: '#007AFF',
  primaryDark: '#0056B3',
  secondary: '#5856D6',
  secondaryDark: '#3634A3',
  background: '#FFFFFF',
  surface: '#F8F9FA',
  surfacePressed: '#E9ECEF',
  text: '#1C1C1E',
  textSecondary: '#6C757D',
  textDisabled: '#ADB5BD',
  border: '#E5E5EA',
  error: '#DC3545',
  success: '#28A745',
  warning: '#FFC107',
  disabled: '#CED4DA',
};

export const darkColors: ThemeColors = {
  primary: '#0A84FF',
  primaryDark: '#0056B3',
  secondary: '#5E5CE6',
  secondaryDark: '#3634A3',
  background: '#1C1C1E',
  surface: '#2C2C2E',
  surfacePressed: '#3A3A3C',
  text: '#FFFFFF',
  textSecondary: '#8E8E93',
  textDisabled: '#636366',
  border: '#38383A',
  error: '#FF453A',
  success: '#30D158',
  warning: '#FFD60A',
  disabled: '#48484A',
};

export const spacing: ThemeSpacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};

export const useAppTheme = (): AppTheme => {
  const context = React.useContext(ThemeContext);

  if (!context) {
    // Fallback if used outside ThemeProvider
    return {
      colors: lightColors,
      spacing,
      isDark: false,
      toggleTheme: () => {},
    };
  }

  return {
    colors: context.theme === Theme.DARK ? darkColors : lightColors,
    spacing,
    isDark: context.theme === Theme.DARK,
    toggleTheme: context.toggleTheme,
  };
};

/**
 * Theme Context
 *
 * Provides app-wide theme state management.
 * Supports light and dark mode with persistence capability.
 */

import * as React from 'react';

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

export const ThemeContext = React.createContext<ThemeContextType | null>(null);

interface ThemeProviderProps {
  children: React.ReactNode;
  initialTheme?: Theme;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  initialTheme = Theme.LIGHT,
}) => {
  const [theme, setThemeState] = React.useState<Theme>(initialTheme);

  const toggleTheme = React.useCallback(() => {
    setThemeState((current: Theme) =>
      current === Theme.LIGHT ? Theme.DARK : Theme.LIGHT,
    );
  }, []);

  const setTheme = React.useCallback((newTheme: Theme) => {
    setThemeState(newTheme);
  }, []);

  const value = React.useMemo(
    () => ({
      theme,
      toggleTheme,
      setTheme,
    }),
    [theme, toggleTheme, setTheme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

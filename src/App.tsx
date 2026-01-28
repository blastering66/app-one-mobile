/**
 * Main App Component
 *
 * This is the root component of the application.
 * It sets up the navigation container and global providers.
 *
 * Architecture decisions:
 * - SafeAreaProvider: Handles safe area insets for notches/home indicators
 * - NavigationContainer: Root navigation wrapper
 * - AppNavigator: Centralized navigation configuration
 */

import * as React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {AppNavigator} from '@navigation/index';
import {ThemeProvider} from '@context/ThemeContext';

const App: React.FC = () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;

/**
 * Navigation Configuration
 *
 * Centralized navigation setup using React Navigation.
 * Uses native-stack for better performance on both platforms.
 *
 * Architecture decisions:
 * - Type-safe navigation with RootStackParamList
 * - Centralized route definitions for maintainability
 * - Screen options can be customized per-screen or globally
 */

import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '@screens/HomeScreen';
import {DetailsScreen} from '@screens/DetailsScreen';
import {SplashScreen} from '@screens/SplashScreen';
import {useAppTheme} from '@hooks/useAppTheme';

/**
 * Type definition for all routes in the app.
 * Add new routes here as the app grows.
 */
export type RootStackParamList = {
  Splash: undefined;
  Home: undefined;
  Details: {itemId: number; title: string};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const AppNavigator: React.FC = () => {
  const {colors} = useAppTheme();

  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: colors.background,
        headerTitleStyle: {
          fontWeight: '600',
        },
        contentStyle: {
          backgroundColor: colors.background,
        },
      }}>
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{
          headerShown: false,
          animation: 'none',
        }}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'AppOne',
          animation: 'fade', // slide_from_right
          animationDuration: 500,
        }}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={({route}) => ({
          title: route.params.title,
        })}
      />
    </Stack.Navigator>
  );
};

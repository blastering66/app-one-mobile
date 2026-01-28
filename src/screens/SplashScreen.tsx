/**
 * Splash Screen
 *
 * Custom splash screen displayed on app launch.
 * Shows a centered logo/text with a 5-second timeout
 * before navigating to the Home screen.
 */

import * as React from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useAppTheme} from '@hooks/useAppTheme';
import type {NavigationProp} from '@navigation/types';

const {width} = Dimensions.get('window');

export const SplashScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<'Splash'>>();
  const {colors} = useAppTheme();

  React.useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Home');
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={[styles.container, {backgroundColor: colors.primary}]}>
      {/* Replace this View with an Image component when you have a logo */}
      {/* Example:
      <Image
        source={require('@assets/images/splash-logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      */}
      <View style={styles.logoPlaceholder}>
        <Image
          source={require('@assets/images/splash_logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.tagline}>Welcome</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: width * 0.5,
    height: width * 0.5,
  },
  logoPlaceholder: {
    width: width * 0.4,
    height: width * 0.4,
    borderRadius: width * 0.2,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  tagline: {
    marginTop: 24,
    fontSize: 18,
    color: '#FFFFFF',
    opacity: 0.8,
  },
});

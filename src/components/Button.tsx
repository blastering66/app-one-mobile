/**
 * Button Component
 *
 * A reusable, accessible button component with multiple variants.
 * Demonstrates:
 * - TypeScript interface for props
 * - Pressable for better touch feedback
 * - Accessibility support
 * - Theme integration
 */

import * as React from 'react';
import {
  Text,
  StyleSheet,
  Pressable,
  ActivityIndicator,
  ViewStyle,
  TextStyle,
  PressableStateCallbackType,
} from 'react-native';
import {useAppTheme} from '@hooks/useAppTheme';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  accessibilityLabel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  fullWidth = true,
  accessibilityLabel,
}) => {
  const {colors} = useAppTheme();

  const getBackgroundColor = React.useCallback(
    (pressed: boolean): string => {
      if (disabled) {
        return colors.disabled;
      }

      switch (variant) {
        case 'primary':
          return pressed ? colors.primaryDark : colors.primary;
        case 'secondary':
          return pressed ? colors.secondaryDark : colors.secondary;
        case 'outline':
        case 'ghost':
          return pressed ? colors.surfacePressed : 'transparent';
        default:
          return colors.primary;
      }
    },
    [colors, disabled, variant],
  );

  const getTextColor = (): string => {
    if (disabled) {
      return colors.textDisabled;
    }

    switch (variant) {
      case 'primary':
      case 'secondary':
        return colors.background;
      case 'outline':
      case 'ghost':
        return colors.primary;
      default:
        return colors.background;
    }
  };

  const getSizeStyles = (): {button: ViewStyle; text: TextStyle} => {
    switch (size) {
      case 'small':
        return {
          button: {paddingVertical: 8, paddingHorizontal: 16},
          text: {fontSize: 14},
        };
      case 'large':
        return {
          button: {paddingVertical: 16, paddingHorizontal: 24},
          text: {fontSize: 18},
        };
      default:
        return {
          button: {paddingVertical: 12, paddingHorizontal: 20},
          text: {fontSize: 16},
        };
    }
  };

  const sizeStyles = getSizeStyles();

  const buttonStyle = React.useCallback(
    ({pressed}: PressableStateCallbackType): ViewStyle[] => [
      styles.button,
      sizeStyles.button,
      {
        backgroundColor: getBackgroundColor(pressed),
        borderWidth: variant === 'outline' ? 1 : 0,
        borderColor: disabled ? colors.disabled : colors.primary,
        opacity: loading ? 0.8 : 1,
        width: fullWidth ? '100%' : undefined,
      },
    ],
    [
      colors.disabled,
      colors.primary,
      disabled,
      fullWidth,
      getBackgroundColor,
      loading,
      sizeStyles.button,
      variant,
    ],
  );

  return (
    <Pressable
      style={buttonStyle}
      onPress={onPress}
      disabled={disabled || loading}
      accessibilityLabel={accessibilityLabel ?? title}
      accessibilityRole="button"
      accessibilityState={{disabled: disabled || loading}}>
      {loading ? (
        <ActivityIndicator color={getTextColor()} size="small" />
      ) : (
        <Text style={[styles.text, sizeStyles.text, {color: getTextColor()}]}>
          {title}
        </Text>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  text: {
    fontWeight: '600',
    textAlign: 'center',
  },
});

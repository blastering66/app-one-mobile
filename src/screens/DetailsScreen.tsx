/**
 * Details Screen
 *
 * Demonstrates receiving navigation params with type safety.
 * Shows how to access route params in a type-safe manner.
 */

import * as React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button} from '@components/Button';
import {useAppTheme} from '@hooks/useAppTheme';
import type {RouteProps} from '@navigation/types';

export const DetailsScreen: React.FC = () => {
  const route = useRoute<RouteProps<'Details'>>();
  const {colors, spacing} = useAppTheme();

  const {itemId, title} = route.params;

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <ScrollView
        contentContainerStyle={[styles.content, {padding: spacing.lg}]}>
        <View
          style={[
            styles.infoCard,
            {
              backgroundColor: colors.surface,
              borderColor: colors.border,
            },
          ]}>
          <Text style={[styles.label, {color: colors.textSecondary}]}>
            Item ID
          </Text>
          <Text style={[styles.value, {color: colors.text}]}>{itemId}</Text>

          <Text
            style={[
              styles.label,
              {color: colors.textSecondary, marginTop: spacing.md},
            ]}>
            Title
          </Text>
          <Text style={[styles.value, {color: colors.text}]}>{title}</Text>
        </View>

        <Text style={[styles.description, {color: colors.textSecondary}]}>
          This screen demonstrates type-safe navigation params. The itemId and
          title are passed from the previous screen and are fully typed.
        </Text>

        <View style={styles.actions}>
          <Button
            title="Perform Action"
            onPress={() => {
              // Action placeholder
            }}
            variant="primary"
          />
          <View style={{height: spacing.sm}} />
          <Button
            title="Secondary Action"
            onPress={() => {
              // Action placeholder
            }}
            variant="secondary"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
  },
  infoCard: {
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 24,
  },
  label: {
    fontSize: 12,
    fontWeight: '500',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  value: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 4,
  },
  description: {
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 24,
  },
  actions: {
    marginTop: 'auto',
  },
});

/**
 * Home Screen
 *
 * The main landing screen of the application.
 * Demonstrates:
 * - Functional component with TypeScript
 * - Type-safe navigation
 * - Custom hooks usage
 * - Reusable components
 */

import * as React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button} from '@components/Button';
import {Card} from '@components/Card';
import {useAppTheme} from '@hooks/useAppTheme';
import type {NavigationProp} from '@navigation/types';

interface ListItem {
  id: number;
  title: string;
  description: string;
}

const SAMPLE_DATA: ListItem[] = [
  {
    id: 1,
    title: 'Getting Started',
    description: 'Learn the basics of the app',
  },
  {id: 2, title: 'Components', description: 'Explore reusable UI components'},
  {id: 3, title: 'Navigation', description: 'Understand navigation patterns'},
  {
    id: 4,
    title: 'State Management',
    description: 'Manage app state effectively',
  },
];

export const HomeScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<'Home'>>();
  const {colors, spacing} = useAppTheme();
  const [refreshing, setRefreshing] = React.useState(false);

  const handleNavigateToDetails = React.useCallback(
    (item: ListItem) => {
      navigation.navigate('Details', {
        itemId: item.id,
        title: item.title,
      });
    },
    [navigation],
  );

  const handleRefresh = React.useCallback(() => {
    setRefreshing(true);
    // Simulate API call
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);

  const renderItem = React.useCallback(
    ({item}: {item: ListItem}) => (
      <Card
        title={item.title}
        description={item.description}
        onPress={() => handleNavigateToDetails(item)}
      />
    ),
    [handleNavigateToDetails],
  );

  const keyExtractor = React.useCallback(
    (item: ListItem) => item.id.toString(),
    [],
  );

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <View style={[styles.header, {paddingHorizontal: spacing.md}]}>
        <Text style={[styles.title, {color: colors.text}]}>
          Welcome to AppOne
        </Text>
        <Text style={[styles.subtitle, {color: colors.textSecondary}]}>
          A React Native TypeScript Starter
        </Text>
      </View>

      <FlatList
        data={SAMPLE_DATA}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        contentContainerStyle={[
          styles.listContent,
          {paddingHorizontal: spacing.md},
        ]}
        refreshing={refreshing}
        onRefresh={handleRefresh}
        showsVerticalScrollIndicator={false}
      />

      <View style={[styles.footer, {paddingHorizontal: spacing.md}]}>
        <Button
          title="View All Features"
          onPress={() =>
            handleNavigateToDetails({
              id: 0,
              title: 'All Features',
              description: 'Complete list',
            })
          }
          variant="primary"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingVertical: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
  },
  listContent: {
    paddingBottom: 16,
  },
  footer: {
    paddingVertical: 16,
  },
});

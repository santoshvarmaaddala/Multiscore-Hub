import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useTheme } from '@/context/ThemeContext';
import ThemeToggle from '@/components/ThemeToggle';

// Define menu items
const MENU_ITEMS = [
  {
    title: 'Preferences',
    content: <ThemeToggle />, // Include the ThemeToggle button
  },
  {
    title: 'Help & Support',
    content: <Text style={{ color: '#666' }}>Get help and support  @Support.com</Text>,
  },
];

export default function Settings() {
  const { theme } = useTheme();

  // Render each menu item
  const renderMenuItem = ({ item }: { item: { title: string; content: React.ReactNode } }) => (
    <View style={[styles.menuItem, { backgroundColor: theme.cardBackground }]}>
      <Text style={[styles.menuTitle, { color: theme.text }]}>{item.title}</Text>
      <View style={styles.menuContent}>{item.content}</View>
    </View>
  );

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <FlatList
        data={MENU_ITEMS}
        keyExtractor={(item) => item.title}
        renderItem={renderMenuItem}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContent: {
    padding: 16, // Add padding around the list
  },
  menuItem: {
    padding: 16,
    marginBottom: 8,
    borderRadius: 8, // Rounded corners for a professional look
    shadowColor: '#000', // Add subtle shadow for depth
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2, // For Android shadow
  },
  menuTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  menuContent: {
    marginTop: 4,
  },
});
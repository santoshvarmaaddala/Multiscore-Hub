import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '@/context/ThemeContext';

export default function History() {
  const { theme } = useTheme(); // Access the current theme

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.text, { color: theme.text }]}>History</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
  },
  text: {
    fontSize: 24, // Large font size
    fontWeight: 'bold', // Bold text
    padding: 16, // Add padding around the text
    textAlign: 'center', // Center-align the text
  },
});
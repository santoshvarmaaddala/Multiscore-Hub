import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { useTheme } from '@/context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme, isDarkMode } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.cardBackground }]}>
      {/* Label */}
      <Text style={[styles.label, { color: theme.text }]}>Dark Mode</Text>

      {/* Toggle Switch */}
      <Switch
        value={isDarkMode} // Bind the switch state to the theme mode
        onValueChange={toggleTheme} // Toggle theme when switched
        trackColor={{
          false: theme.primary, // Track color for light mode
          true: theme.secondary, // Track color for dark mode
        }}
        thumbColor={isDarkMode ? theme.backgroundColor : theme.primary} // Thumb color
      />
    </View>
  );
};

export default ThemeToggle;

// Styles
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // Arrange label and switch horizontally
    alignItems: 'center', // Align items vertically
    justifyContent: 'space-between', // Add space between label and switch
    padding: 16, // Padding around the container
    borderRadius: 8, // Rounded corners
    margin: 16, // Margin around the container
  },
  label: {
    fontSize: 16, // Font size
    fontWeight: 'bold', // Bold text
  },
});
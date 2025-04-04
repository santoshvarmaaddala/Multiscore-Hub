import React from 'react';
import { useTheme } from '@/context/ThemeContext'; // Import the theme context
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  const { theme } = useTheme(); // Access the current theme

  return (
    <Tabs
      screenOptions={{
        headerTitleAlign: 'center',
        headerTitle: 'MultiScorer Hub',
        headerStyle: {
          backgroundColor: theme.background, // Match header background to theme
        },
        headerTintColor: theme.text, // Match header text color to theme
        tabBarActiveTintColor: theme.tabBarActiveTintColor, // Active tab color
        tabBarInactiveTintColor: theme.tabBarInactiveTintColor, // Inactive tab color
        tabBarStyle: {
          backgroundColor: theme.tabBarBackground, // Tab bar background color
        },
      }}
    >
      {/* Home Tab */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />

      {/* History Tab */}
      <Tabs.Screen
        name="history"
        options={{
          title: 'History',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="history" color={color} />,
        }}
      />

      {/* Settings Tab */}
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
        }}
      />
    </Tabs>
  );
}
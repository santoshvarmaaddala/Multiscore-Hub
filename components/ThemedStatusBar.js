import React from "react";
import { StatusBar } from "react-native";
import { useTheme } from "@/context/ThemeContext";

export default function ThemedStatusBar() {
  const { theme } = useTheme();

  return (
    <StatusBar
      barStyle={theme.statusBarStyle} // Set text color (light-content or dark-content)
      backgroundColor={theme.statusBarBackground} // Set background color
      translucent // Allow content to extend underneath the status bar
    />
  );
}
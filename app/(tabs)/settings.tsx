// components/CenteredText.js
import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "@/context/ThemeContext";
import ThemeToggle from "@/components/ThemeToggle";

export default function Settings() {
  const { theme } = useTheme();
  return (
  <View style={[styles.container, {backgroundColor: theme.background}]}>
      <Text style={[styles.text, {color: theme.text}]}>
       Settings
      </Text>
      <ThemeToggle />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  text: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 16,
    textAlign: "center"
  }

})
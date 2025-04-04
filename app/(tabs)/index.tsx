import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FlatGrid } from "react-native-super-grid";
import SportCard from "@/components/SportCard";
import { useTheme } from "@/context/ThemeContext"; // Import the theme context
import { Sport } from "@/lib/types";
import { FlatList } from "react-native";

// Define sports data with categories
const sportsData = [
  {
    title: "Available Sports",
    data: ["badminton"], // Must match the union type
  },
  {
    title: "Coming Soon",
    data: ["cricket", "kabaddi", "volleyball", "football"],
  },
];

export default function Home() {
  const { theme } = useTheme(); // Access the current theme

  return (
    <FlatList
      data={sportsData} // Use sportsData as the data source
      keyExtractor={(item) => item.title} // Use the title as the key
      contentContainerStyle={[styles.container, { backgroundColor: theme.background }]} // Apply container styles
      renderItem={({ item }) => (
        <View style={styles.sectionContainer}>
          <Text style={[styles.title, { color: theme.sectionTitle }]}>{item.title}</Text>
          <FlatGrid
            itemDimension={100}
            data={item.data}
            spacing={20}
            renderItem={({ item }) => (
              <SportCard sport={item as Sport} />
            )}
          />
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  sectionContainer: {
    marginBottom: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  },
});
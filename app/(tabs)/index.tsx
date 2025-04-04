import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { FlatGrid } from "react-native-super-grid";
import SportCard from "@/components/SportCard";
import { useTheme } from "@/context/ThemeContext";
import { Sport } from "@/lib/types";


const sportsData = [
  {
    title: "Available Sports",
    data: ["badminton"],
  },
  {
    title: "Coming Soon",
    data: ["cricket", "kabaddi", "volleyball", "football"],
  },
];

export default function Home() {
  const { theme } = useTheme();
  const insets = useSafeAreaInsets(); // Get safe area insets

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      {/* Remove top padding */}
      <FlatList
        data={sportsData}
        keyExtractor={(item) => item.title}
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: insets.bottom, // Apply bottom padding for safe area
        }}
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  },
  sectionContainer: {
    marginBottom: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 12,
    letterSpacing: 0.5,
  },
});
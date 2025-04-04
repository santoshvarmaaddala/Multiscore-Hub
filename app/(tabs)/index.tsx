import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { FlatGrid } from "react-native-super-grid";
import SportCard from "@/components/SportCard";
import { Sport } from "@/lib/types";

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
  return (
    <FlatList
      data={sportsData} // Use sportsData as the data source
      keyExtractor={(item) => item.title} // Use the title as the key
      contentContainerStyle={styles.container} // Apply container styles
      renderItem={({ item }) => (
        <View style={styles.sectionContainer}>
          <Text style={styles.title}>{item.title}</Text>
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
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});
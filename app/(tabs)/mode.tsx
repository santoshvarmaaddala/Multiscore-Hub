// import React from "react";
// import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
// import { useTheme } from "@/context/ThemeContext";
// import  sportsModeData  from "@/utils/SportsMode.json";
// import { Sport } from "@/lib/types";

// const sport = sportsModeData;

// interface ModeProps {
//   route: {
//     params: {
//       sport: Sport; // Type-safe parameter for the selected sport
//     };
//   };
// }

// export default function Mode({ route }: ModeProps) {
//   const { theme } = useTheme();
//   const { sport } = route.params; // Extract the selected sport from navigation params

//   const handleModeSelect = (mode: string) => {
//     console.log(`Selected mode: ${mode}`);
//     // Navigate to the next screen or perform an action
//   };

//   return (
//     <View style={[styles.container, { backgroundColor: theme.background }]}>
//       <Text style={[styles.title, { color: theme.text }]}>Choose a Mode</Text>
//       <Text style={[styles.subtitle, { color: theme.text }]}>
//         Selected Sport: {sport.name}
//       </Text>
//       {sport.modes.map((mode, index) => (
//         <TouchableOpacity
//           key={index}
//           style={[styles.modeButton, { backgroundColor: theme.cardBackground }]}
//           onPress={() => handleModeSelect(mode)}
//         >
//           <Text style={[styles.modeText, { color: theme.text }]}>{mode}</Text>
//         </TouchableOpacity>
//       ))}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 16,
//     textAlign: "center",
//   },
//   subtitle: {
//     fontSize: 18,
//     marginBottom: 24,
//     textAlign: "center",
//   },
//   modeButton: {
//     padding: 16,
//     marginBottom: 12,
//     borderRadius: 8,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   modeText: {
//     fontSize: 18,
//     fontWeight: "bold",
//   },
// });
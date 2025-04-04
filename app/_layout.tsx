import { Stack } from "expo-router/stack";
import '../global.css';
import { ThemeProvider } from "../context/ThemeContext";
import { StatusBar } from "react-native";

export default function Layout() {
    return (
        <ThemeProvider>
            <StatusBar 
                barStyle="default" // Default value, overridden by individual screens
                backgroundColor="transparent"
                translucent
                />
            <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            </Stack>
        </ThemeProvider>
    )
}
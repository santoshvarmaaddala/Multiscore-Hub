import { Stack } from "expo-router/stack";
import '../global.css';
import { ThemeProvider } from "../context/ThemeContext";
import ThemedStatusBar from "@/components/ThemedStatusBar";
import { useTheme } from "../context/ThemeContext";

export default function Layout() {
    return (
        <ThemeProvider>
            <ThemedStatusBar />
            <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            </Stack>
        </ThemeProvider>
    )
}
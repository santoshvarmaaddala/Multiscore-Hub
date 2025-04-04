import { Stack } from "expo-router/stack";
import '../global.css';
import { ThemeProvider } from "../context/ThemeContext";
import ThemedStatusBar from "@/components/ThemedStatusBar"; 


export default function Layout() {
    return (
        <ThemeProvider>
            <MainScreen />
        </ThemeProvider>
    )
}

function MainScreen() {

    return (
            <>
                <ThemedStatusBar />
                <Stack>
                    <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                </Stack>
            </>
        
    )
}
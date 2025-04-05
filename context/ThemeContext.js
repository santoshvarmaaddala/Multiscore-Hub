import React, { createContext, useContext, useState } from 'react';
import { lightTheme, darkTheme } from '@/utils/theme';



const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({children}) => {
  const [isDarkMode, setIsDarkMode] = useState(false); // Default to light mode

  const toggleTheme = () => setIsDarkMode((prev) => !prev); // Toggle dark mode

  const theme = isDarkMode ? darkTheme : lightTheme; // Determine theme based on isDarkMode

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
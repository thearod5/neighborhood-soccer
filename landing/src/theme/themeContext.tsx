// ThemeContext.js

import React, { ReactNode, createContext, useContext } from "react";
export const textColor = "#ffffff";
export const rowItemBackground = "#f0f0f0";
export const backgroundColor = "#121212";
export const chicagoBlue = "#6ad5fc";
export const chicagoRed = "#DE033F";
// Define a type for your theme
interface Theme {
  primaryColor: string;
  secondaryColor: string;
  backgroundColor: string;
  // You can add more theme properties here with their respective types
}

// Define the theme object
const defaultTheme: Theme = {
  primaryColor: chicagoBlue,
  secondaryColor: chicagoRed,
  backgroundColor: backgroundColor,
};

// Create a context with the default value
const ThemeContext = createContext<Theme>(defaultTheme);

interface ThemeProviderProps {
  children: ReactNode; // ReactNode allows for any valid React child (component, primitive, etc.)
}

// ThemeProvider component
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const theme: Theme = {
    primaryColor: chicagoBlue,
    secondaryColor: chicagoRed,
    backgroundColor: backgroundColor,
  };

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

// Custom hook to use the theme
export const useTheme = () => useContext(ThemeContext);

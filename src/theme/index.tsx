import React, { createContext, ReactNode, useContext } from "react";

export interface AppTheme {
  text: string;
  background: string;
  primary: string;
  emphasis: string;
  link: string;
  targetWidth: string;
  largeWidth: string;
}

export const darkTheme: AppTheme = {
  text: "#ffffff",
  background: "#121212",
  primary: "#6ad5fc", //chicago blue
  emphasis: "#DE033F", //chicago red
  link: "#6ad5fc",
  targetWidth: "75%",
  largeWidth: "85%",
};

interface ThemeProviderProps {
  children: ReactNode;
  theme: AppTheme;
}

const ThemeContext = createContext<AppTheme>(darkTheme);

export const useAppTheme = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  theme,
}) => <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;

import { ReactNode, createContext, useContext } from "react";
import { darkTheme as appTheme } from "./appTheme";
import { AppTheme } from "./types";

interface ThemeProviderProps {
  children: ReactNode;
  theme: AppTheme;
}

const ThemeContext = createContext<AppTheme>(appTheme);

export const useAppTheme = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  theme,
}) => <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;

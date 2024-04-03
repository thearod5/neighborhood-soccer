import React, { ReactNode } from "react";
import { useTheme } from "../theme/themeContext";

interface ThemedPageProps {
  children: ReactNode;
}

export const ThemedPage: React.FC<ThemedPageProps> = ({ children }) => {
  const theme = useTheme();

  return (
    <div
      style={{
        backgroundColor: theme.backgroundColor,
        color: theme.primaryColor,
        minHeight: "100vh",
        margin: 0,
        padding: 0,
      }}
    >
      {children}
    </div>
  );
};

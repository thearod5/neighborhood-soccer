import React, { createContext, useContext } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children, theme }) => (
    <ThemeContext.Provider value={theme}>
        {children}
    </ThemeContext.Provider>
);

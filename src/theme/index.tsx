import React, {createContext, ReactNode, useContext} from 'react';

export interface Theme {
    text: string;
    background: string;
    primary: string;
    emphasis: string;
}

export const darkTheme: Theme = {
    text: '#ffffff',
    background: '#121212',
    primary: "#B3DDF2", //chicago blue
    emphasis: '#FF0000' //chicago red
};

interface ThemeProviderProps {
    children: ReactNode;
    theme: Theme;
}


const ThemeContext = createContext<Theme>(darkTheme);

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({children, theme}) => (
    <ThemeContext.Provider value={theme}>
        {children}
    </ThemeContext.Provider>
);

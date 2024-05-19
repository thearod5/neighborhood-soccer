// src/contexts/ConfigContext.tsx
import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const ConfigConstants = {
  maxWidth: 1000,
  eventCardSize: 225,
};

type ConfigContextType = typeof ConfigConstants & {
  isMobile: boolean;
};

const ConfigContext = createContext<ConfigContextType | undefined>(undefined);

interface ConfigProviderProps {
  children: ReactNode;
}

export const ConfigProvider: React.FC<ConfigProviderProps> = ({ children }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ConfigContext.Provider value={{ ...ConfigConstants, isMobile }}>
      {children}
    </ConfigContext.Provider>
  );
};

export const useConstants = () => {
  const context = useContext(ConfigContext);
  if (context === undefined) {
    throw new Error("useConstants must be used within a ConfigProvider");
  }
  return context;
};

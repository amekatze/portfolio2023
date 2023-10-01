import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from "react";

interface ThemeContextProps {
  currentTheme: string;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState("light");

  useEffect(() => {
    const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    setCurrentTheme(preferredTheme);

    const systemThemeChangeHandler = (event: MediaQueryListEvent) => {
      setCurrentTheme(event.matches ? "dark" : "light");
    };

    const systemThemeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );
    systemThemeMediaQuery.addEventListener("change", systemThemeChangeHandler);

    return () => {
      systemThemeMediaQuery.removeEventListener(
        "change",
        systemThemeChangeHandler
      );
    };
  }, []);

  const toggleTheme = useCallback(() => {
    setCurrentTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  }, []);

  return (
    <ThemeContext.Provider value={{ currentTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

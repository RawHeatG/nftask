import { useState, useContext, createContext, FC } from "react";

type Theme = "light" | "dark";

const ThemeContext = createContext<{ theme: Theme; toggleTheme: Function }>({
  theme: "dark",
  toggleTheme: () => null,
});

export const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("light");
  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};

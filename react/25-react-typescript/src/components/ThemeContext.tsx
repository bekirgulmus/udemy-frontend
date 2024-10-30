import React, { createContext } from "react";
import { theme } from "./theme.ts";

type ThemeContextProviderProps = {
  children: React.ReactNode
}

export const ThemeContext = createContext(theme);

export const ThemeProvider =({children}: ThemeContextProviderProps) => {
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  )
}

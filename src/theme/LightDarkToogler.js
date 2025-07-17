import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { createGlobalStyle } from "styled-components";
import React, { useEffect, useState } from "react";
import ButtonThemeToggle from "./ButtonThemeToogler";
import { ThemeProvider } from "./themeContext";
import { lightTheme, darkTheme } from "./CustumTheme";
const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.25s linear;
  }
`;

const LightDarkTooglerApp = () => {
  const [theme, setTheme] = useState("light");
  const [currentTheme, setCurrentTheme] = useState(lightTheme);
  const toogleTheme = () => {
    console.log("toogle theme");
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    setCurrentTheme(theme === "light" ? lightTheme : darkTheme);
  }, [theme]);

  let value = {
    theme,
    toogleTheme,
  };
  return (
    <ThemeProvider value={value}>
      <StyledThemeProvider theme={currentTheme}>
        <GlobalStyles />
        <div>
          <h1>Theme Toggle App</h1>
          <ButtonThemeToggle />
        </div>
      </StyledThemeProvider>
    </ThemeProvider>
  );
};

export default LightDarkTooglerApp;

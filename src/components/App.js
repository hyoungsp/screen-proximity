import React, { useState } from "react";
import Router from "./Router";
import { light, dark } from "./Theme";
import GlobalStyles from "./GlobalStyled";
import { ThemeProvider } from "styled-components";

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <ThemeProvider
      theme={() => {
        return {
          theme: theme === "light" ? light : dark,
          toggleTheme: toggleTheme
        };
      }}
    >
      <Router />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;

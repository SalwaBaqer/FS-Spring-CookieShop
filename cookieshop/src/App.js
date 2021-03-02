// Styling
import { Title, Description, GlobalStyle, ThemeButton } from "./styles";
import { ThemeProvider } from "styled-components";

//components
import CookieList from "./components/CookieList";

//state
import React, { useState } from "react";

//theme
const theme = {
  light: {
    mainColor: "#242424", // main font color
    backgroundColor: "#fefafb", // main background color
    pink: "#F2637E",
  },
  dark: {
    mainColor: "#fefafb", // main font color
    backgroundColor: "#242424", // main background color
    pink: "#F2637E",
  },
};

function App() {
  const [currentTheme, setCurrentTheme] = useState("light");
  const toggleTheme = () => {
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");
  };
  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <ThemeButton onClick={toggleTheme}>
        {currentTheme === "light" ? "Dark" : "Light"} Mode
      </ThemeButton>
      <Title>Cookies and Beyond</Title>
      <Description>Delightful Piece Of heaven</Description>

      <CookieList />
    </ThemeProvider>
  );
}

export default App;

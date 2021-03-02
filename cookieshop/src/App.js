// Styling
import { GlobalStyle } from "./styles";
import { ThemeProvider } from "styled-components";

//components
import CookieList from "./components/CookieList";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

//state
import React, { useState } from "react";

//Routing
import { Route, Switch } from "react-router";

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

      <Navbar toggleTheme={toggleTheme} />
      <Switch>
        <Route path="/cookies">
          <CookieList />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global-styles";
import { theme } from "./theme";

import Header from "./components/header/header.component";
import HomePage from "./components/homepage/homepage.component";
import ToggleMenuIcon from "./components/menu/toggleMenuIcon.component";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
          </Switch>
        </Router>
        <ToggleMenuIcon />
      </>
    </ThemeProvider>
  );
}

export default App;

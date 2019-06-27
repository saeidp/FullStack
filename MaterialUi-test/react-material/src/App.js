import React from "react";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import TypoGraphy from "@material-ui/core/Typography";
import NavBar from "./navbar";
import Posts from "./posts";
import Contact from "./contact";
import "./App.css";

function App() {
  return (
    <div className="App">
      <AppBar color="primary" position="static">
        <ToolBar>
          <TypoGraphy variant="title" color="inherit">
            my header
          </TypoGraphy>
          <NavBar />
        </ToolBar>
      </AppBar>
      <Posts />
      <Contact />
    </div>
  );
}

export default App;

import React, { useContext } from "react";
import "./App.css";
import MyComponent from "./MyComponent";
import ComplexState from "./ComplexState";
import ThemeComponent from "./ThemeComponent";

const App: React.FC = () => {
  return (
    <div className="App">
      <MyComponent />
      <ComplexState />
      <ThemeComponent />

      {/* <ComplexState username = "" email="" password="" /> */}
    </div>
  );
};

export default App;

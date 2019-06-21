import React from "react";
import "./App.css";
import Hook from "./Hook";
import StyledComponents from "./StyledComponents";
import HigherOrderComponent from "./HigherOrderComponent";
import NestedSelectors from "./NestedSelectors";
function App() {
  return (
    <div className="App">
      <Hook />
      <StyledComponents />
      <HigherOrderComponent />
      <NestedSelectors />
    </div>
  );
}

export default App;

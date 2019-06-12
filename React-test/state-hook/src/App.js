import React from "react";
import Example from "./example-hook";
import "./App.css";
import ExampleWithManyStates from "./example.with.many.states-hook";

function App() {
  return (
    <div className="App">
      <Example />
      <ExampleWithManyStates />
    </div>
  );
}

export default App;

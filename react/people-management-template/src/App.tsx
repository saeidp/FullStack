import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { PeopleManager } from "./component/PeopleManager";

const App: React.FC = () => {
  return (
    <div className="App-header">
      <PeopleManager />
    </div>
  );
};

export default App;

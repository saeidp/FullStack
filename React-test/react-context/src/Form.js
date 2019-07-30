import React, { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";
import { SampleContext } from "./contexts/SampleContext";

export default function Form(props) {
  const { toggleTheme } = useContext(ThemeContext);
  const { sample, changeSample } = useContext(SampleContext);
  changeSample();
  console.log(sample);
  return (
    <div>
      Change background color
      <button onClick={toggleTheme}>click me</button>
    </div>
  );
}

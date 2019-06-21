import React, { useContext } from "react";
import { ThemeContext, ITheme } from "./ThemeContext";

export default function ThemeComponent() {
  const themeContext = useContext<ITheme>(ThemeContext);
  console.log(themeContext.backgroundColor);

  return <div> The theme color is {themeContext.color} </div>;
}

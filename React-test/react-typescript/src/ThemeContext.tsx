import { createContext, useContext } from "react";

export interface ITheme {
  backgroundColor: string;
  color: string;
}
// The standard way to create context. It takes an initial value object
export const ThemeContext = createContext<ITheme>({
  backgroundColor: "black",
  color: "white"
});
// Accessing context in a child component
// const themeContext = useContext<ITheme>(ThemeContext);

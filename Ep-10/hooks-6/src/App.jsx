import React, { createContext } from "react";
import { useState } from "react";
import Container from "./Container";

export const ThemeContext = createContext();

const App = () => {
  const [theme, setTheme] = useState("Light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "Light" ? "Dark" : "Light"));
  };

  return (
    <ThemeContext.Provider value={{ theme }}>
      <button onClick={toggleTheme}>toggle Theme</button>
      <h1>App Comp</h1>
      <Container />
    </ThemeContext.Provider>
  );
};

export default App;

import React from "react";
import { useContext } from "react";
import { ThemeContext } from "./App";

const User = () => {
  const {theme} = useContext(ThemeContext);

//   console.log("contextValue",contextValue);

  const textStyle = {
    backgroundColor: theme === "Light" ? "white" : "black",
    color: theme === "Light" ? "black" : "white",
  };

  return (
    <div>
      <h1 style={textStyle}>User</h1>
    </div>
  );
};

export default User;

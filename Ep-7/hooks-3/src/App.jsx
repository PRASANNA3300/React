import React, { useEffect, useState } from "react";
import { useRef } from "react";

const App = () => {
  const [input, setInput] = useState("");

  const inputRef = useRef();

  console.log("getting rendered");

  // useEffect(() => {
  //   inputRef.current = input;
  // }, [input]);

  const display = () => {
    console.log(inputRef.current);
    inputRef.current.focus();
  };

  return (
    <div>
      <h1>input</h1>
      <input
        ref={inputRef}
        type="text"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <p>my name is {input}</p>
      <p>my name is {inputRef.current}</p>
      <button onClick={display}>Show input</button>
    </div>
  );
};

export default App;

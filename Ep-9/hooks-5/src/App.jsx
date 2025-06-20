import React from "react";
import { useState } from "react";
import List from "./List";
import { useCallback } from "react";
import { useMemo } from "react";

const App = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const getItems = useCallback(
    (incrementor) => {
      return [
        number + incrementor + 1,
        number + incrementor + 2,
        number + incrementor + 3,
      ];
    },
    [number]
  );

  // const getItems = useMemo(() => {
  //   return [number + 1, number + 2, numbrer + 3];
  // }, [number]);

  const theme = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  return (
    <div style={theme}>
      <input
        type="number"
        value={number}
        onChange={(event) => setNumber(parseInt(event.target.value))}
      />
      <button onClick={() => setDark(curr == !curr)}>Toggle Theme</button>
      <List getItems={getItems} />
    </div>
  );
};

export default App;

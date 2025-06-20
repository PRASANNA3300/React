import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  const [first, setFirst] = useState(1);
  const [second, setSecond] = useState(100);

  const getData = () => {
    console.log("Data Recieved");
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    console.log("first value changed");
  }, [first]);

  return (
    <div>
      <h1>First:{first}</h1>
      <h2>Second:{second}</h2>
      <button onClick={() => setFirst((curr) => curr + 1)}>Add First</button>
      <button onClick={() => setSecond((curr) => curr + 1)}>Add Second</button>
    </div>
  );
};

export default App;

import React, { useState } from "react";
import { setFruit } from "../slices/fruitsSlice";
import { useDispatch } from "react-redux";

const Contact = () => {
  const [fruit, setFruitInfo] = useState("");

  const dispatch = useDispatch();

  const addFruit = () => {
    dispatch(setFruit(fruit));
  };

  return (
    <div>
      <h1>Contact</h1>
      <input
        type="text"
        placeholder="Enter a fruit"
        onChange={(e) => setFruitInfo(e.target.value)}
      />
      <button onClick={addFruit}>Add Fruit</button>
    </div>
  );
};

export default Contact;

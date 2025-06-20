import React from "react";
import { useSelector } from "react-redux";

const About = () => {
  const fruits = useSelector((state)=>state.fruitsInfo.fruits)
  
  console.log(fruits);
  

  return (
    <div>
      <h1>About</h1>
    </div>
  );
};

export default About;

import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const {Username} = useParams();
  return (
    <div>
      <h1>User:{Username}</h1>
    </div>
  );
};

export default User;

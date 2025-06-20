import React from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    //api call;
    navigate("/users");
  };

  return (
    <nav>
      <h1>Grony</h1>
      <ul>
        <Link to="/">Home</Link>

        {/* <Link to="/Users">Users</Link> */}
        <li onClick={handleClick}>Users</li>

        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
      </ul>
    </nav>
  );
};

export default Navbar;

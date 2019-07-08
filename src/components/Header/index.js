import React from "react";
import "./style.css";

function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <li className="navbar-brand">Atlanta Braves Clicky Game</li>
      <li className="navbar-brand">Your current score: {props.score} </li>
      <li className="navbar-brand">Your top score: {props.topScore}</li>
    </nav>
  );
}

export default Header;

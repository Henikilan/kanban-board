import React from "react";
import "./Buttom.css";

const Button = ({ onClick }) => (
  <button className="button" onClick={onClick}>
    + Add card
  </button>
);

export default Button;

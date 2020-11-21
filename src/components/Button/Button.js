import React from "react";
import "./Buttom.css";

const Button = ({ ...props }) => (
  <button className="button" {...props}>
    + Add card
  </button>
);

export default Button;

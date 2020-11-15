import React from "react";
import User from "../User/User";
import "./Header.css";

const Header = () => (
  <header className="header">
    <div className="logo">Awesome Kanban Board</div>
    <User />
  </header>
);

export default Header;

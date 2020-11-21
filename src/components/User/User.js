import React, { useState } from "react";
import "./User.css";
import avatar from "./avatar.svg";
import chevronDown from "./chevronDown.svg";

const User = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  return (
    <div className="user">
      <button
        className="user-button"
        onClick={() => setIsProfileOpen(!isProfileOpen)}
      >
        <img
          src={chevronDown}
          className={`chevron${isProfileOpen ? " open" : ""}`}
          alt="chevron"
        />
        <img src={avatar} className="user-avatar" alt="avatar" />
      </button>

      {isProfileOpen && (
        <ul className="user-menu">
          <li>Profile</li>
          <li>My tasks</li>
          <li>Log out</li>
        </ul>
      )}
    </div>
  );
};

export default User;

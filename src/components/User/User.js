import React from 'react';
import './User.css';
import avatar from './avatar.svg';
import chevronDown from './chevronDown.svg';

const User = () =>
    <div className="user">
        <img src={chevronDown} className="chevron-down" alt="chevron" />
        <img src={avatar} className="user-avatar" alt="avatar" />
        <ul className="user-menu">
            <li>Profile</li>
            <li>Log out</li>
        </ul>
    </div>

export default User;
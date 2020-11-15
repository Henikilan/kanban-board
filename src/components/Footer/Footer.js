import React from 'react';
import './Footer.css';

const Footer = ({ data }) =>
    <footer className="footer">
        <div className="active_tasks">Active tasks: {data[2].issues.length}</div>
        <div className="finished_tasks">Finished tasks: {data[3].issues.length}</div>
        <div className="author">Kanban board by Anastasia 2020</div>
    </footer>

export default Footer;
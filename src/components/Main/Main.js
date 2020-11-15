import React from 'react';
import './Main.css';
import Column from "../Column/Column";

const Main = ({ data }) =>
    <main className="main">
        <Column />
        <Column />
        <Column />
        <Column />
    </main>

export default Main;
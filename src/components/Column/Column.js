import React from 'react';
import './Column.css';
import Issues from "../Issues/Issues";
import Button from "../Button/Button";
import AddCardForm from "../AddCard/AddCardForm";

const Column = ({ title, issues }) =>
    <div className="column">
        <div className="title">{title}</div>
        <Issues issues={issues} />
        <AddCardForm />
        <Button />
    </div>

export default Column;
import React from 'react';
import './Column.css';
import Issues from "../Issues/Issues";
import Button from "../Button/Button";
import AddCardForm from "../AddCard/AddCardForm";

const Column = () =>
    <div className="column">
        <div className="title">Backlog</div>
        <Issues />
        <AddCardForm />
        <Button />
    </div>

export default Column;
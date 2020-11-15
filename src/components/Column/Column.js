import React, { useState } from "react";
import "./Column.css";
import Issues from "../Issues/Issues";
import Button from "../Button/Button";
import AddCardForm from "../AddCard/AddCardForm";

const Column = ({ title, issues }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  return (
    <div className="column">
      <div className="title">{title}</div>
      <Issues issues={issues} />
      {isFormOpen ? (
        <AddCardForm onSubmit={() => setIsFormOpen(false)} />
      ) : (
        <Button onClick={() => setIsFormOpen(true)} />
      )}
    </div>
  );
};

export default Column;

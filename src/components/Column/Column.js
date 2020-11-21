import React, { useState } from "react";
import "./Column.css";
import Issues from "../Issues/Issues";
import Button from "../Button/Button";
import AddCardForm from "../AddCard/AddCardForm";

const Column = ({ title, issues, addBacklogCard }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const handleSubmit = (name) => {
    if (title === "Backlog") {
      addBacklogCard(name);
    }
    setIsFormOpen(false);
  };

  return (
    <div className="column">
      <div className="title">{title}</div>
      <Issues issues={issues} />
      {isFormOpen ? (
        <AddCardForm onSubmit={handleSubmit} />
      ) : (
        <Button onClick={() => setIsFormOpen(true)} />
      )}
    </div>
  );
};

export default Column;

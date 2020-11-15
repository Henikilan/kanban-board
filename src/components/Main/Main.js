import React from "react";
import "./Main.css";
import Column from "../Column/Column";

const Main = ({ data, setData }) => {
  return (
    <main className="main">
      {data.map(({ title, issues }) => (
        <Column key={title} title={title} issues={issues} />
      ))}
    </main>
  );
};

export default Main;

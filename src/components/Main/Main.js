import React from "react";
import { v4 as uuid } from "uuid";
import "./Main.css";
import Column from "../Column/Column";

const Main = ({ data, setData }) => {
  const addBacklogCard = (name) => {
    setData([
      ...data.map((dataItem) =>
        dataItem.title === "Backlog"
          ? {
              ...dataItem,
              issues: [
                ...dataItem.issues,
                {
                  id: uuid(),
                  name,
                },
              ],
            }
          : dataItem
      ),
    ]);
  };
  const moveCard = () => {};
  return (
    <main className="main">
      {data.map(({ title, issues }) => (
        <Column
          key={title}
          title={title}
          issues={issues}
          addBacklogCard={addBacklogCard}
        />
      ))}
    </main>
  );
};

export default Main;

import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import { dataMock } from "./dataMock";
import { Route, Switch } from "react-router-dom";
import FullView from "./components/FullView/FullView";

function App() {
  const localStorageData = localStorage.getItem("data");
  const [data, setData] = useState(
    localStorageData ? JSON.parse(localStorageData) : dataMock
  );
  const updateData = (newData) => {
    localStorage.setItem("data", JSON.stringify(newData));
    setData(newData);
  };

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route
          path="/"
          children={<Main data={data} updateData={updateData} />}
          exact
        />
        <Route
          path="/:id"
          children={({
            match: {
              params: { id },
            },
          }) => <FullView id={id} data={data} />}
        />
      </Switch>
      <Footer data={data} />
    </div>
  );
}

export default App;

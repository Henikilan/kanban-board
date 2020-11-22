import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import { dataMock } from "./dataMock";

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
      <Main data={data} updateData={updateData} />
      <Footer data={data} />
    </div>
  );
}

export default App;

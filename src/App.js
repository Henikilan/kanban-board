import React, { useState } from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import { dataMock } from './dataMock';

function App() {
    const [data, setData] = useState(dataMock);
  return (
    <div className="App">
        <Header />
        <Main data={data} setData={setData} />
        <Footer data={data} />
    </div>
  );
}

export default App;

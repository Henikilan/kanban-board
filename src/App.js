import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import { dataMock } from './dataMock';

function App() {

  return (
    <div className="App">
        <Header />
        <Main data={dataMock} />
        <Footer data={dataMock} />
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import Header from "./layout/Header";
import Main from "./layout/Main";
import Footer from "./layout/Footer";
import Home from './home/Home';

const App = () => {
  return (
    <>
      <Header /> 
      <Main>
        <Home />
      </Main>
      <Footer />
    </>
  );
}

export default App;

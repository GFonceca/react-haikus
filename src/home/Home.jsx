import React from "react";
import "./Home.css";
import Tarjeta from "./tarjeta";

const Home = () => {
  return (
    <>
      <h4 className="H4">Colección</h4>
      <div id="galeria">
        <Tarjeta />
        <Tarjeta />
        <Tarjeta />
        <Tarjeta />
        <Tarjeta />
      </div>
    </>
  );
};

export default Home;
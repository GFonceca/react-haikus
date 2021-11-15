import React from "react";
import "./Home.css";
import Tarjeta from "./tarjeta";

const Home = () => {
  return (
    <>
      <h4 className="H4">Coleccion</h4>
      <div id="galeria">
        <Tarjeta autor="Pepito" Haiku="imagen subida para que vean todes vosotres" />
        <Tarjeta autor="Pepito" Haiku="imagen subida para que vean todes vosotres" />
        <Tarjeta autor="Pepito" Haiku="imagen subida para que vean todes vosotres" />
        <Tarjeta autor="Pepito" Haiku="imagen subida para que vean todes vosotres" />
        <Tarjeta autor="Pepito" Haiku="imagen subida para que vean todes vosotres" />
      </div>
    </>
  );
};

export default Home;
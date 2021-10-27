import React from "react";
import "./Main.css";
import Home from "../Home/Home";
//import Tarjeta from "../Home/tarjeta"

const Main = ({ children }) => {
  return (
    <main>
      <div>
        <div>
        <h1 className="H1">Haikus</h1>
	     {children}
        </div>
        <div>
        <Home />
        </div>
      </div>
    </main>
  );
};

export default Main;
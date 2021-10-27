import React from "react";
import "./Main.css";
import Home from "../Home/Home";
import tarjeta from "./tarjeta";

const Main = ({ children }) => {
  return (
    <main>
			<h1 className="H1">Haikus</h1>
	     {children}
       <Home />
    </main>
  );
};

export default Main;
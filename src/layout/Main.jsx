import React from "react";
import "./Main.css";
import Home from "../Home/Home";

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
import React from "react";
import "./Home.css";
import tarjeta from "./tarjeta";

const Home = () => {
    return (
        <tarjeta>
            <div>
                <img className="Tarjeta" src="https://picsum.photos/200/300" alt="" />
            </div>
        </tarjeta>
    );
};

export default Home;
import React from "react";
import "./Contactanos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";

const Contactanos = () => {
  return (
    <>
    <div className="CuerpoContactos">
        <FontAwesomeIcon icon ={faFacebook} id="FacebookIcono"/>
        <FontAwesomeIcon icon ={faEnvelope} id="CorreoIcono"/>
        <FontAwesomeIcon icon ={faInstagramSquare} id="InstagramIcono"/>
    </div>
      
    </>
  );
};

export default Contactanos;
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
    <div>
      <p className="Testo">Lorem ipsum dolor, sit amet <br /> consectetur adipisicing elit. <br /> Labore rerum ut esse illo molestias quasi numquam impedit, a odit magni nihil debitis consectetur <br /> blanditiis eius? Delectus perferendis magnam voluptatem aliquam.</p>
    </div>
    </>
  );
};

export default Contactanos;
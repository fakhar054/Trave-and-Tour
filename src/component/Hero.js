import React from "react";
import "./hero.css";

export default function Hero(props) {
  return (
    <div className={props.cName}>
      <img src={props.image} alt="" />
      <div className="hero_content">
        <h1>{props.heading}</h1>
        <p>{props.heroPara}</p>
        <a href="_blank" className={props.btn_class}>
          {props.btn_text}
        </a>
      </div>
    </div>
  );
}

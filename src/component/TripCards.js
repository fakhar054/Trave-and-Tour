import React from "react";
import "./card.css";

export default function TripCards(props) {
  return (
    <div className="TripCards">
      <div className="card">
        <img src={props.image} alt="" />
        <h3>{props.heading}</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil
          similique animi rem quidem ut molestias, ullam eum voluptates ipsum
          aperiam expedita ab. Maxime suscipit eum ipsam qui perspiciatis?
          Placeat, consequatur.
        </p>
      </div>
    </div>
  );
}

import React from "react";
import "./DestinationStyle.css";

export default function Destination(props) {
  return (
    <div>
      <div className="destination">
        <h1>{props.heading}</h1>
        <p>{props.Dest_para}</p>
        <div className={props.cName}>
          <div className="des_text">
            <h2>{props.heading_two}</h2>
            <p>{props.info}</p>
          </div>
          <div className="images">
            <img src={props.image1} alt="First " />
            <img src={props.image2} alt="First " />
          </div>
        </div>
      </div>
    </div>
  );
}

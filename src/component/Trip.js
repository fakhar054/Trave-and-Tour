import React from "react";
import TripCards from "./TripCards";
import "./TripStyle.css";

export default function Trip() {
  return (
    <div className="trips">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using google map</p>
      <div className="cards-div">
        <TripCards image="/images/4.jpg" heading="Trip to Dubai" />
        <TripCards image="/images/2.jpg" heading="Trip to Thailand" />
        <TripCards image="/images/8.jpg" heading="Trip to Japan" />
      </div>
    </div>
  );
}

import React from "react";
import Hero from "./Hero";
import DestinationData from "./DestinationData";
import Trip from "./Trip";

export default function Home() {
  return (
    <div>
      <Hero
        image="/images/2.jpg"
        cName="hero"
        heading="Your Journey Starts Here"
        heroText="Choose Your Favourite Destination"
        btn_class="btn_class"
        btn_text="Travel Now"
      />
      <DestinationData />
      <Trip />
    </div>
  );
}

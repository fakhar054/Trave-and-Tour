import React from "react";
import Destination from "./Destination";

export default function DestinationData() {
  return (
    <div>
      <Destination
        cName="first_des"
        heading="Popular Destination"
        Dest_para="Tours give you the Opportunity"
        heading_two="Taal Volcano, Bantanges"
        info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
        tenetur itaque error nobis neque ea asperiores odio voluptas dolore.
        Optio ipsam id consequuntur voluptas velit illum nemo porro a.
        Accusantium, quod. Quo aperiam id ducimus incidunt laudantium quis,
        sed ratione eos libero earum qui veritatis doloremque excepturi,
        eius dolor mollitia?"
        image1="/images/1.jpg"
        image2="/images/2.jpg"
      />
      <Destination
        cName="first_des_reverse"
        heading_two="Mt.Daguldul"
        info="   Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
        tenetur itaque error nobis neque ea asperiores odio voluptas dolore.
        Optio ipsam id consequuntur voluptas velit illum nemo porro a.
        Accusantium, quod. Quo aperiam id ducimus incidunt laudantium quis,
        sed ratione eos libero earum qui veritatis doloremque excepturi,
        eius dolor mollitia?"
        image1="/images/3.jpg"
        image2="/images/5.jpg"
      />
    </div>
  );
}

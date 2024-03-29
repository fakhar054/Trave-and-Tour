import React from "react";
import Hero from "./Hero";
import "./about.css";

export default function About() {
  return (
    <div>
      <Hero
        image="/images/3.jpg"
        cName="about_class"
        heading="About"
        btn_class="hide_btn"
      />
      <div className="content_box container">
        <h2>Lorem Lipusm</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
          tenetur itaque error nobis neque.
        </p>
        <div className="content ">
          <div className="img_div">
            <img src="/images/1.jpg" />
          </div>
          <div className="info_about">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae, tenetur itaque error nobis neque.Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Recusandae, tenetur itaque
              error nobis neque. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Recusandae, tenetur itaque error nobis neque.
            </p>
            <a href="/">Read More</a>
          </div>
        </div>
      </div>
    </div>
  );
}

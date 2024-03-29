import React, { useState } from "react";
import Hero from "./Hero";
import "./contact.css";

export default function Contact() {
  const data = { name: "", email: "", message: "" };
  const [input, setInput] = useState(data);

  const temp = { name: "", email: "", message: "" };

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    setInput({ name: "", email: "", message: "" });
  };
  return (
    <div>
      <Hero
        image="/images/8.jpg"
        cName="about_class"
        heading="Contact"
        btn_class="hide_btn"
      />
      <div className="contact_form">
        <h2 id="main">Contact Us</h2>
        <div className="contact_parent container">
          <div className="contact_numb">
            <div className="address">
              <i className="fa-solid fa-location-dot"></i>
              <p>
                Near Shell Petrol Pump Changa Manga Road
                <br />
                Chunian Kasur
              </p>
            </div>
            <div className="address">
              <i className="fa-solid fa-phone"></i>
              <p>0342-0534077</p>
            </div>
            <div className="address">
              <i className="fa-regular fa-envelope"></i>
              <p>fakharali054@gmail.com</p>
            </div>
          </div>
          <form className="form" onSubmit={formSubmit}>
            <h2>Send Messages</h2>
            <input
              type="text"
              placeholder="Full Name"
              name="name"
              onChange={handleChange}
              value={input.name}
            />
            <input
              type="Email"
              placeholder="Enter Your Email"
              name="email"
              onChange={handleChange}
              value={input.email}
            />
            <textarea
              placeholder="Enter Your Message Here"
              required=""
              name="message"
              onChange={handleChange}
              value={input.message}
            />
            <button type="submit" className="send_btn">
              Submit Now
            </button>
          </form>
          <p></p>
        </div>
      </div>
    </div>
  );
}

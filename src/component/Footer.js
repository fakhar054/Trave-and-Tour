import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>Trippy</h1>
          <p>Choose Your Favourite Destination</p>
        </div>
        <div>
          <a href="/">
            <i className="fa-brands fa-square-facebook"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-square-twitter"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-square-behance"></i>
          </a>
        </div>
      </div>
      <div className="bottom">
        <div className="col">
          <h2>Projects</h2>
          <a href="/">Changelog</a>
          <a href="/">Status</a>
          <a href="/">Licnes</a>
          <a href="/">All Versions</a>
        </div>
        <div className="col">
          <h2>Community</h2>
          <a href="/">GitHub</a>
          <a href="/">Issues</a>
          <a href="/">Twitter</a>
          <a href="/">Projects</a>
        </div>
        <div className="col">
          <h2>Help</h2>
          <a href="/">Support</a>
          <a href="/">Troubleshooting</a>
          <a href="/">Licenes</a>
          <a href="/">Contact Us</a>
        </div>
        <div className="col">
          <h2>Others</h2>
          <a href="/">Terms of Service</a>
          <a href="/">Privicy Policy</a>
          <a href="/">Licenes</a>
        </div>
      </div>
    </div>
  );
}

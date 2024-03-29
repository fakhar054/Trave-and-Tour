import "./navbar.css";
import React, { useState } from "react";
import { MenuItems } from "./MenuItems";
import "./navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  const menuFun = () => {
    setMenu(!menu);
    console.log(menu);
  };
  return (
    <nav className="NavbarItems ">
      <h1 className="navbar-logo">Trippy</h1>
      <div className="menu-icons" onClick={menuFun}>
        {menu ? (
          <i className="fa-solid fa-x"></i>
        ) : (
          <i className="fa-solid fa-bars"></i>
        )}
      </div>
      <ul className={menu ? "nav-menu nav-menu-active" : "nav-menu "}>
        {MenuItems.map((data, index) => {
          return (
            <li key={index}>
              <Link to={data.url} className={data.cName}>
                <i className={data.icon}></i>
                {data.title}
              </Link>
            </li>
          );
        })}
        <button>Sign Up</button>
      </ul>
    </nav>
  );
}

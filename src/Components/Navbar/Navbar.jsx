import React from "react";
import "./Navbar.css";
import maindress from "../../img/maindress.jpg";
import menu from "../../img/menu.png";
import baraque from "../../img/baraque.png";
import heart from "../../img/heart.png";
import contact from "../../img/contact.png";
import bag from "../../img/bag.png";
import search from "../../img/magnifying-glass.png";

const Navbar = () => {


  
  return (
    <>
      <div className="mainimage">
        <img src={maindress} alt="main dress" />
      </div>
      <div className="navbar">
        <div className="left">
          <img src={menu} alt="menu" /> <span>Menu</span>
        </div>
        <div className="bottom">
          <img src={baraque} alt="baraque" />
        </div>
        <div className="right">
          <div>
            <img src={search} alt="search" />{" "}
          </div>
          <div>
            <img src={heart} alt="heart" />
          </div>
          <div>
            {" "}
            <img src={contact} alt="contact" />
          </div>
          <div>
            {" "}
            <img src={bag} alt="bag" />
          </div>
        </div>
           
       
      </div>
    </>
  );
};

export default Navbar;

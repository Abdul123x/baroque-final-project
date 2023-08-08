import React from "react";
import Links from "../LinksComponents/Links";
import "./Chantilli.css";
import dress5 from '../../img/dress5.jpeg'
import menu from "../../img/menu.png";
import baraque from "../../img/baraque.png";
import heart from "../../img/heart.png";
import contact from "../../img/contact.png";
import bag from "../../img/bag.png";
import search from "../../img/magnifying-glass.png";

const Chantilli = () => {
  return (
    <>
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

      <div className="baraoqueshopseting">
        <div className="leftbaroque">
          <div className="baroqueshopimg">
            <img src={dress5} alt="main dress" />
          </div>
        </div>
        <div className="rightbroque">
          <div className="about">
            <h3>EMBROIDERED LAWN UF-404</h3>
            <h2>PKR 7,990</h2>
            <br />
            <br />
            <br />
            <hr />
            <br />
            <br />
            <div className="type">
              <h4>Type</h4> <button>Unstitched</button>
              <div className="color">
                <h4>Color</h4> <button>Printed</button>
              </div>
              <div className="size">
                <h4>Size</h4> <button>Chart</button>
              </div>
            </div>
            <div className="shopbtn1">
              <button className="wishlist">Add To wishlist</button>
              <button className="cart">Add to Cart</button>
              <button className="Buy">Buy Now</button>
            </div>
          </div>
        </div>
      </div>

      <div className="Linksss">
        <Links />
      </div>
    </>
  );
};

export default Chantilli;

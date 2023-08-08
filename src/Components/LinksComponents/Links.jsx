import React from "react";
import "./Links.css";
import facebook from "../../img/facebook.png";
import instagram from "../../img/instagram.png";
import tiktok from "../../img/tik-tok.png";
import mastercard from '../../img/mastercard.png'
import visa from '../../img/visa.png'
const Links = () => {
  return (
    <>
      <div className="links">
        <div className="buttons">
          <button className="btn2" id="btns">
            <a href="#">WHO WE ARE</a> &nbsp; &nbsp; &nbsp; |
          </button>
          <button className="btn2" id="btn2">
            {" "}
            &nbsp; &nbsp; &nbsp; <a href="#">CONTACT US</a> &nbsp; &nbsp; &nbsp;
            |
          </button>
          <button className="btn2" id="btn3">
            {" "}
            &nbsp; &nbsp; &nbsp; <a href="#">OUR RESPONSIBILITY</a> &nbsp;
            &nbsp; &nbsp; |
          </button>
          <button className="btn2" id="btn3">
            {" "}
            &nbsp; &nbsp; &nbsp; <a href="#">EXCHANGE & REFUND</a> &nbsp; &nbsp;
            &nbsp; |
          </button>
          <button className="btn2" id="btn3">
            {" "}
            &nbsp; &nbsp; &nbsp; <a href="#">EXCHANGE FORM</a> &nbsp; &nbsp;
            &nbsp; |
          </button>
          <button className="btn2" id="btn3">
            {" "}
            &nbsp; &nbsp; &nbsp; <a href="#">SHIPPING</a> &nbsp; &nbsp; &nbsp; |
          </button>
          <button className="btn2" id="btn3">
            {" "}
            &nbsp; &nbsp; &nbsp; <a href="#">LOOK BOOK</a> &nbsp; &nbsp; &nbsp;
            |
          </button>{" "}
          <br />
          <button className="btn2" id="btn3">
            {" "}
            &nbsp; &nbsp; &nbsp; <a href="#">ORDER CANCELELATION FORM</a> &nbsp;
            &nbsp; &nbsp; |
          </button>
          <button className="btn2" id="btn3">
            {" "}
            &nbsp; &nbsp; &nbsp; <a href="#">TRACK YOUR ORDER</a> &nbsp; &nbsp;
            &nbsp; |
          </button>
          <button className="btn2" id="btn3">
            {" "}
            &nbsp; &nbsp; &nbsp; <a href="#">SERVICE WE PROVIDE</a> &nbsp;
            &nbsp; &nbsp; |
          </button>
          <button className="btn2" id="btn3">
            {" "}
            &nbsp; &nbsp; &nbsp; <a href="#">CARRERS</a> &nbsp; &nbsp; &nbsp; |
          </button>
          <button className="btn2" id="btn3">
            {" "}
            &nbsp; &nbsp; &nbsp; <a href="#">LEGALS</a> &nbsp; &nbsp; &nbsp; |
          </button>
          <button className="btn2" id="btn3">
            {" "}
            &nbsp; &nbsp; &nbsp; <a href="#">FAQ's</a> &nbsp; &nbsp; &nbsp;{" "}
          </button>
        </div>

        <div className="images">
          <img className="fb" src={facebook} alt="fb" />
          <div className="instagram">
            <img src={instagram} alt="insta" />
          </div>
          <div className="tiktok">
            <img src={tiktok} alt="" />
          </div>
            <h3>We Accecpt</h3>
          <div className="atms">
            <img src={mastercard} alt="mastercard" />
            <img className="visa" src={visa} alt="mastercard" />
          </div>
        </div>
      </div>
      <footer className="footer">
        <p>All Rights Reserved To Baraque 2023</p>
      </footer>

    </> 
  );
};

export default Links;

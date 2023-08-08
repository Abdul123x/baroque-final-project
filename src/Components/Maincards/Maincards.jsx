import React from "react";
import dress2 from "../../img/dress2.jpeg";
import dress3 from '../../img/dress3.jpeg'
import dress4 from "../../img/dress4.jpeg";
import dress5 from '../../img/dress5.jpeg'
import dress6 from '../../img/dress6.jpeg'
import dress7 from '../../img/dress7.jpeg'
import "./Maincards.css";
const Maincards = () => {
  return (
    <>
      <div className="maincard">
        {/* leftcard */}
        <div className="leftcard">
          <img src={dress2} alt="dress2" />
        </div>
        <div className="leftcardh3">
          <h3>SWISS LAWN</h3>
        </div>
        <div className="btnsh">
          <button className="button2">
            <a href="#">SHOP NOW</a>
          </button>
        </div>
        {/* bottomcard */}
        <div className="bottomcard">
          <img src={dress4} alt="dress3" />
        </div>
        <div className="bottomcardh3">
          <h3>READY TO WEAR</h3>
        </div>
        <div className="btnsh">
          <button className="button2">
            <a href="#">SHOP NOW</a>
          </button>
        </div>
        {/* rightcard */}
        <div className="rightcard">
            <img src={dress3} alt="" />
        </div>
        <div className="rightcardh3">
          <h3>DUPATTAS</h3>
        </div>
        <div className="btnsh">
          <button className="button2">
            <a href="#">SHOP NOW</a>
          </button>
        </div>
      </div>

      {/* for bottom */}
      <div className="bottommain">
        {/* for bottomleft */}
        <div className="bottomleft">
          <img src={dress5} alt="dress5" />
        </div>
        <div className="bottomcardh3">
          <h3>CHANTILLI</h3>
        </div>
        <div className="btnsh">
          <button className="button2" style={{marginLeft:'-13rem'}}>
            <a href="#">SHOP NOW</a>
          </button>
        </div>
        {/* for bottom mid */}
        <div className="bottommid">
          <img src={dress6} alt="dress6" />
        </div>
        <div className="bottomcardh3">
          <h3>BOTTOMS</h3>
        </div>
        <div className="btnsh">
          <button className="button2" style={{marginLeft:'-13rem'}}>
            <a href="#">SHOP NOW</a>
          </button>
        </div>
        {/* forbottom right */}
        <div className="bottomright">
          <img src={dress7} alt="dress7" />
        </div>
        <div className="bottomcardh3">
          <h3>SPECIAL PRICES</h3>
        </div>
        <div className="btnsh">
          <button className="button2">
            <a href="#">SHOP NOW</a>
          </button>
        </div>
      </div>
    </>
  );
};

export default Maincards;

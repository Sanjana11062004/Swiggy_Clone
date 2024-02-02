import React from "react";
import Dishes from "./Dishes";
import Header from "./header";
import "../styles/style.css";

import dropdownblack from "../assets/images/dropdownblack.png"
import Hr from "./Hr";
function Dish() {
  return (
    <div>
      <Header></Header>
      <div className="dish-main">
        <div className="flexx">
          <button className="dropbtn" onclick="myFunction()">
            Dropdown
          </button>
          <img src={dropdownblack} alt="dropdown" width={18} height={18}></img>
        </div>
        <div className="dish-main-item">
          <Dishes></Dishes>
          <Dishes></Dishes>
        </div>
        
      </div>
    </div>
  );
}

export default Dish;

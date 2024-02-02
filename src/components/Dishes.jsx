import React from "react";
import dropdown from "../assets/images/dropdown.png";
import dosa from "../assets/images/dosa.png";
import veg from "../assets/images/veg.png"

function Dishes() {
  return (
    <div className="dishes-container">
      <div className="dropdown">
        <div className="flexx">
          <button className="dropbtn" onclick="myFunction()">
            Dropdown
          </button>
          <img src={dropdown} alt="dropdown" width={18} height={18}></img>
        </div>
        <div className="dropdown-content" id="myDropdown">
          <div className="flexx color">
            <div className="col">
              <div>
                <img src={veg} width={18}></img>
              </div>
              <div className="dishes-items"><p>Dosa</p></div>
              <div className="dishes-items-price">
                <p>Rs.186</p>
              </div>
              <div className="dishes-desc">
                <p >
                  Soft and crispy chicken strips wrapped in a creamy mayo and
                  shredded lettuce in flat bread.
                </p>
              </div>
            </div>
            <div>
                <img  className="dishes-image" src={dosa} alt="dish-image" width={120} height={100}></img>
            </div>
          </div>
          <div></div>
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
    </div>
  );
}

export default Dishes;

import React from "react";
import Dishes from "./Dishes";
import "../styles/style.css";
import Header from "./Header";
import veg from "../assets/images/veg.png";
import Home from "./Home";
import dropdownblack from "../assets/images/dropdownblack.png";
import { useState } from "react";
import { Link } from "react-router-dom";

function Dish() {
  const [cartCount, setCartCount] = useState(0);
  const addToCart = (id) => {
    
    setCartCount(cartCount+1);
  };
  return (
    <div>
      <Header cartCount={cartCount}/>
      <div className="dish-main">
        <div className="dish-main-head">
          <span>
            <a>Home /</a>
          </span>
          <span>
            <a> Coimbatore / </a>
          </span>
          <span>
            <p> Wok Asian Food</p>
          </span>
        </div>
        <div className="flexx">
          <div className="col">
            <p className="res-name">Ruchi Restaurant</p>
            <p className="margin-zero">South Indian Chinese</p>
            <p className="margin-zero">Pollachi 1.2 km</p>
          </div>
          <div className="rating-main">
            <div className="ratings">
              <div>
                <i></i>
                <p>4.5</p>
              </div>
              <hr className="ratings-hr"></hr>
              <div>
                <p className="rating-font">20+ ratings</p>
              </div>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="flexx">
          <button className="dropbtn" onclick="myFunction()">
            Recommendations
          </button>
          <img src={dropdownblack} alt="dropdown" width={18} height={18}></img>
        </div>
        
        <div className="dish-main-item">
          <Dishes addToCart={addToCart}></Dishes>
        </div>
        <div className="view-cart">
            <p>{cartCount} items added</p>
            <Link to='/checkout' className="view-cart-button"><p>VIEW CART</p></Link>
        </div>
      </div>
      
    </div>
  );
}

export default Dish;

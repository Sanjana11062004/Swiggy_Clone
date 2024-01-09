import React from "react";
import logo from "../assets/images/logo.png";
import dropdown from "../assets/images/dropdown.png";
import search from "../assets/images/search.png";
import discount from "../assets/images/discount.png";
import  help from "../assets/images/help.png"
import user from "../assets/images/user.png"
import cart from "../assets/images/cart.png"

function Header() {
  return (
    <div className="headCont">
      <div className="nav center flex ">
        <img src={logo} className="logo" width={56} alt="logo"></img>
        <div>
          <li className="nav-item address">
            <a className="active a-color"  href="#">
              Annamalai Nagar
            </a>
          </li>
        </div>
        <div>
        <li className="nav-item drop-cont header acc">
            <a className="font-header"  aria-current="page"  >
            M24P+FG8 Annamalai N...
            </a>
        </li>
        </div>
        <div>
        <img
          src={dropdown}
          className="dropdown"
          width={20}
          height={20}
          alt="dropdown"
        ></img></div>
      </div>
      <div>
        <ul className="nav justify-content-center weight">
          <li className="nav-item">
            <a className="nav-link active head-space" aria-current="page" href="#">
                <span><img src={search} alt="search" width={16} ></img></span>
                &nbsp;&nbsp;<span>Search</span>
                
            </a>
            
          </li>
          <li className="nav-item">
            <a className="nav-link active head-space" aria-current="page" href="#">
                <span><img src={discount} alt="search" width={18} ></img></span>
                &nbsp;&nbsp;<span>Offers<sup>NEW</sup></span>
                
            </a>
          </li>
          <li className="nav-item">
          <a className="nav-link active head-space" aria-current="page" href="#">
                <span><img src={help} alt="search" width={18} ></img></span>
                &nbsp;&nbsp;<span>Help</span>
                
            </a>
          </li>
          <li className="nav-item acc">
          <a className="nav-link active head-space" aria-current="page" href="#">
                <span><img src={user} alt="search" width={22} ></img></span>
                &nbsp;&nbsp;<span>Sanjana...</span>
                
            </a>
          </li>
          <li className="nav-item" >
          <a className="nav-link active head-space" aria-current="page" href="#">
                <span><img src={cart} alt="search" width={22} ></img></span>
                &nbsp;&nbsp;<span>Cart</span>
                
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;

import React from "react";
import arrow from "../assets/images/arrow.png"
import rarrow from "../assets/images/rarrow.png"
import biriyani from "../assets/images/biriyani.png"
import Parotta from "../assets/images/Parotta.png"
import momos from "../assets/images/Momos.png"
import { Link } from "react-router-dom";

function Card() {
  const scrollLeft = () => {
    const container = document.querySelector(".pictures-section1");
    container.scrollLeft -= 100; // Adjust the scroll amount as needed
  };

  const scrollRight = () => {
    const container = document.querySelector(".pictures-section1");
    container.scrollLeft += 100; // Adjust the scroll amount as needed
  };
  return (
    <div>
      <div className="section1">
        <p className="heading">Sanjana. what's on your mind?</p>
        <div className="arrow">
            <button type="button" className="btn btn-primary" onClick={scrollLeft} style={{borderRadius:"200px",backgroundColor:"gray","border":"none"}}><img src={arrow} alt="arrow" width={12}></img></button>
            <button type="button" className="btn btn-primary" onClick={scrollRight} style={{borderRadius:"200px",backgroundColor:"gray","border":"none"}}><img src={rarrow} alt="arrow" width={12}></img></button>
            
        </div> 
      </div>
      <div className="pictures-section1">
        <Link to=""><img src={biriyani} width={144} height={180} alt="image"></img></Link>
        <Link to=""><img src={biriyani} width={144} height={180} alt="image"></img></Link>
        <Link to=""><img src={biriyani} width={144} height={180} alt="image"></img></Link>
        <Link to=""><img src={biriyani} width={144} height={180} alt="image"></img></Link>
        <Link to=""><img src={biriyani} width={144} height={180} alt="image"></img></Link>
        <Link to=""><img src={biriyani} width={144} height={180} alt="image"></img></Link>
        <Link to=""><img src={biriyani} width={144} height={180} alt="image"></img></Link>
        <Link to=""><img src={biriyani} width={144} height={180} alt="image"></img></Link>
        <Link to=""><img src={biriyani} width={144} height={180} alt="image"></img></Link>
        <Link to=""><img src={biriyani} width={144} height={180} alt="image"></img></Link>
        <img src={Parotta} width={144} height={180} alt="image"></img>
        <img src={momos} width={144} height={180} alt="image"></img>
        <img src={momos} width={144} height={180} alt="image"></img>
        <img src={momos} width={144} height={180} alt="image"></img>
        <img src={momos} width={144} height={180} alt="image"></img>
        <img src={momos} width={144} height={180} alt="image"></img>
        <img src={momos} width={144} height={180} alt="image"></img>
        <img src={momos} width={144} height={180} alt="image"></img>
        <img src={momos} width={144} height={180} alt="image"></img>
        <img src={momos} width={144} height={180} alt="image"></img>
        <img src={momos} width={144} height={180} alt="image"></img>
        <img src={momos} width={144} height={180} alt="image"></img>
        <img src={momos} width={144} height={180} alt="image"></img>
        <img src={momos} width={144} height={180} alt="image"></img>
        <img src={momos} width={144} height={180} alt="image"></img>
        <img src={momos} width={144} height={180} alt="image"></img>
        <img src={momos} width={144} height={180} alt="image"></img>
        <img src={momos} width={144} height={180} alt="image"></img>
      </div>
      <hr></hr>
    </div>
  );
}

export default Card;

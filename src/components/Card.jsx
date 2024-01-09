import React from "react";
import arrow from "../assets/images/arrow.png"
import rarrow from "../assets/images/rarrow.png"
import biriyani from "../assets/images/biriyani.png"
import Parotta from "../assets/images/Parotta.png"
import momos from "../assets/images/momos.png"

function Card() {
  return (
    <div className="main">
      <div className="section1">
        <p className="heading">Sanjana. what's on your mind?</p>
        <div className="arrow">
            <button type="button" class="btn btn-primary" style={{"border-radius":"200px","background-color":"orange","border":"none"}}><img src={arrow} alt="arrow" width={12}></img></button>
            <button type="button" class="btn btn-primary" style={{"border-radius":"200px","background-color":"orange","border":"none"}}><img src={rarrow} alt="arrow" width={12}></img></button>
            
        </div> 
      </div>
      <div className="pictures-section1">
        <img src={biriyani} width={144} height={180} alt="image"></img>
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

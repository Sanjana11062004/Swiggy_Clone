import React from "react";
import Pizza from "../assets/images/Pizza.png"
import dosa from "../assets/images/dosa.png"


function Items(props){
    return(
        <div className='body-image-container'>
            <a href='' className='body-image-container-anchor'>
            <div class="body-image-container-1">
              <img className='body-image-container-pic' src={props.image} ></img>
              <div class="centered">{props.imgoffer}</div>
            </div>
            <div className='body-image-container-2'>
              <span className='body-image-container-text'>{props.resname}</span>
              <div className='body-image-container-3'>
                <img src='/images/star-inside-circle.png' width={19} height={21}></img> 
                <span className='body-image-container-text-1' >{props.rating} &#8226; {props.delivery}</span><br></br>
              </div>
              <span className='body-image-container-text-2' >{props.variety}<br></br>{props.area}</span>
            </div>
            </a>
        </div>
    );
}

export default Items;
import React from "react";

function Dishes(){
    return(
        <div>
            <div className="dropdown">
  <div className="flexx">
    <button className="dropbtn" onclick="myFunction()">Dropdown

    </button>
    <i className="fa fa-caret-down"></i>
    </div>
  <div className="dropdown-content" id="myDropdown">
  	<div className="flexx">
    	<div className="col">
        	<div>img</div>
            <div>American Chicken Wrap</div>
            <div><p>186</p></div>
            <div><p>Soft and crispy chicken strips wrapped in a creamy mayo and shredded lettuce in flat bread.</p></div>
        </div>
        <div>
        	<p>Love</p>
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
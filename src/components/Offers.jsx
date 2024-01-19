import React from "react";

function Offers(props){
    return(
        <div style={{"margin-top":"2%"}}>
            <div>
            
            <div className="offers-home">
                <img src={props.offers} alt="Offers"></img>
            </div>
            </div>
        </div>
    );
}

export default Offers;
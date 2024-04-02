import React from "react";

function Address(props){
    return(
        <div className="addr-main">
            <div>
                <i>
                    Home
                </i>
            </div>
            <div>
                <h5>{props.headName}</h5>
                <p>{props.address}</p>
                <h6>{props.time}</h6>
                <button>{props.button}</button>
            </div>
        </div>
    );
}

export default Address;
import React from "react";
import Pizza from "../assets/images/Pizza.png"
import dosa from "../assets/images/dosa.png"


function Items(props){
    return(
        <div style={{"margin-top":"2%"}}>
            <div className="card gradient" style={{"width": "18rem"}}>
                <img src={props.image} class="card-img-top" alt="item" style={{"border-radius":"12px"}}></img>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>

                </div>
            </div>
        </div>
    );
}

export default Items;
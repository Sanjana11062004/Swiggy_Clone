import React from "react";
import playstore from "../assets/images/playstore.png"
import appstore from "../assets/images/appstore.png"
function Footer(){
    return(
        <div>
            <div className="footer-top">
                <div style={{width:"38%"}}>
                    <p className="footer-text">For better experience,download the Swiggy app now</p>
                </div>
                <div>
                    <img src={playstore} className="footer-img" ></img>
                </div>
                <div>
                    <img src={appstore} className="footer-img"></img>
                </div>
            </div>
            <div className="footer-bottom">
                <div class="grid-container">
                    <div class="grid-item">
                        <div className="grid-part1">
                            <div></div>
                            <div></div>
                        </div>
                        <div></div>
                    </div>
                    <div class="grid-item">2</div>
                    <div class="grid-item">3</div>  
                    <div class="grid-item">4</div> 
                </div>
            </div>
        </div>
    );
}

export default Footer;
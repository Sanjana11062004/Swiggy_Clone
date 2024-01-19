import "./styles/style.css";
import Header from "./components/header";
import Card from "./components/Card";
import Card2 from "./components/Card2";
import Items from "./components/Items";
import dosa from "../src/assets/images/dosa.png";
import offer1 from "./assets/images/offer1.png";
import offer2 from "./assets/images/offer2.png";
import Pizza from "./assets/images/Pizza.png"

import { useState } from "react";
import Offers from "./components/Offers";

function App() {
  const [image, setImage] = useState([dosa,Pizza , , , , , , , , , ,]);
  const [offers, setOffers] = useState([offer1 , offer2]);

  return (
    <div>
      <Header></Header>
      <div className="main">
        <hr style={{ "margin-bottom": "6px" }}></hr>
        <p className="heading">Best offers for you</p>
          <div className=" app-div offers-app">
            {offers.map((i) =>(
              <Offers offers={i}></Offers>
            ))}
          </div>
        
        <Card></Card>
        <Card2></Card2>

        <div className="app-div content-gap">
          {image.map((i) => (
            <Items image={i}></Items>
          ))}
        </div>
        </div>
    </div>
  );
}

export default App;

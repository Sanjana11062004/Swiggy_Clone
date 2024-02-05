import "./styles/style.css";
import Header from "./components/header";
import Card from "./components/Card";
import Card2 from "./components/Card2";
import Items from "./components/Items";
import Hr from "./components/Hr";
import Footer from "./components/Footer";
import ContentBig from "./components/ContentBig";
import Content from "./components/Content";
import Dish from "./components/Dish";
import dosa from "../src/assets/images/dosa.png";
import Offers from "./components/Offers";
import React, { useState } from "react";
import offer1 from "./assets/images/offer1.png";
import offer2 from "./assets/images/offer2.png";
import Restaurant from "./Screens/Restaurant";
import { BrowserRouter } from "react-router-dom";

function App() {
  
  return(
   
    <BrowserRouter>
    <Routes>
   
        <Route index element={<Home />} />
        <Route path="blogs" element={<Restaurant />} />
       
      
    </Routes>
  </BrowserRouter>
    
  );
}

export default App;

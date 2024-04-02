import React, { useState } from "react";
import "../styles/style.css";
import Header from "../components/Header";
import Card from "../components/Card";
import Card2 from "../components/Card2";
import Items from "../components/Items";
import Hr from "../components/Hr";
import Footer from "../components/Footer";
import ContentBig from "../components/ContentBig";
import Content from "../components/Content";
import dosa from "../assets/images/dosa.png";
import Offers from "../components/Offers";
import offer1 from "../assets/images/offer1.png";
import offer2 from "../assets/images/offer2.png";
import { Link } from "react-router-dom";
import Dish from "./Dish";

function Home() {
  const [offers, setOffers] = useState([offer1, offer2]);
  const nextPage = () => {
    <Link to="/dish">next</Link>;
  };

 
  
  return (
    <div>
      <Header></Header>
      <div className="main">
        <p className="heading margin-next-head">Best offers for you</p>
        <div className=" app-div offers-app">
          {offers.map((i) => (
            <Offers offers={i}></Offers>
          ))}
        </div>

        <Card></Card>
        <Card2></Card2>

        <div className="app-div content-gap">
          <Link to="/dish">
            <Items
              onClick={nextPage}
              image={dosa}
              imgoffer="ITEM AT 129"
              resname="Burger King"
              rating="4.3"
              delivery="60-65 mins"
              variety="Burgers American"
              area="Saravapatti"
            ></Items>
          </Link>
          <Items
            image={dosa}
            imgoffer="ITEM AT 129"
            resname="Burger King"
            rating="4.3"
            delivery="60-65 mins"
            variety="Burgers American"
            area="Saravapatti"
          ></Items>

          <Items
            image={dosa}
            imgoffer="ITEM AT 129"
            resname="Burger King"
            rating="4.3"
            delivery="60-65 mins"
            variety="Burgers American"
            area="Saravapatti"
          ></Items>
          <Items
            image={dosa}
            imgoffer="ITEM AT 129"
            resname="Burger King"
            rating="4.3"
            delivery="60-65 mins"
            variety="Burgers American"
            area="Saravapatti"
          ></Items>
          <Items
            image={dosa}
            imgoffer="ITEM AT 129"
            resname="Burger King"
            rating="4.3"
            delivery="60-65 mins"
            variety="Burgers American"
            area="Saravapatti"
          ></Items>
          <Items
            image={dosa}
            imgoffer="ITEM AT 129"
            resname="Burger King"
            rating="4.3"
            delivery="60-65 mins"
            variety="Burgers American"
            area="Saravapatti"
          ></Items>
          <Items
            image={dosa}
            imgoffer="ITEM AT 129"
            resname="Burger King"
            rating="4.3"
            delivery="60-65 mins"
            variety="Burgers American"
            area="Saravapatti"
          ></Items>
          <Items
            image={dosa}
            imgoffer="ITEM AT 129"
            resname="Burger King"
            rating="4.3"
            delivery="60-65 mins"
            variety="Burgers American"
            area="Saravapatti"
          ></Items>
          <Items
            image={dosa}
            imgoffer="ITEM AT 129"
            resname="Burger King"
            rating="4.3"
            delivery="60-65 mins"
            variety="Burgers American"
            area="Saravapatti"
          ></Items>
          <Items
            image={dosa}
            imgoffer="ITEM AT 129"
            resname="Burger King"
            rating="4.3"
            delivery="60-65 mins"
            variety="Burgers American"
            area="Saravapatti"
          ></Items>
          <Items
            image={dosa}
            imgoffer="ITEM AT 129"
            resname="Burger King"
            rating="4.3"
            delivery="60-65 mins"
            variety="Burgers American"
            area="Saravapatti"
          ></Items>
          <Items
            image={dosa}
            imgoffer="ITEM AT 129"
            resname="Burger King"
            rating="4.3"
            delivery="60-65 mins"
            variety="Burgers American"
            area="Saravapatti"
          ></Items>
          <Items
            image={dosa}
            imgoffer="ITEM AT 129"
            resname="Burger King"
            rating="4.3"
            delivery="60-65 mins"
            variety="Burgers American"
            area="Saravapatti"
          ></Items>
          <Items
            image={dosa}
            imgoffer="ITEM AT 129"
            resname="Burger King"
            rating="4.3"
            delivery="60-65 mins"
            variety="Burgers American"
            area="Saravapatti"
          ></Items>
          <Items
            image={dosa}
            imgoffer="ITEM AT 129"
            resname="Burger King"
            rating="4.3"
            delivery="60-65 mins"
            variety="Burgers American"
            area="Saravapatti"
          ></Items>
          <Items
            image={dosa}
            imgoffer="ITEM AT 129"
            resname="Burger King"
            rating="4.3"
            delivery="60-65 mins"
            variety="Burgers American"
            area="Saravapatti"
          ></Items>
        </div>
      </div>
      <div className="main2">
        <Hr></Hr>
      </div>
      <div className="main2-content">
        <p className="heading-main2 margin-next-head-main2">
          Best Places to Eat Across Cities
        </p>
        <div className="cont-flex">
          <Content></Content>
          <Content></Content>
          <Content></Content>
          <Content></Content>
          <Content></Content>
          <Content></Content>
          <Content></Content>
          <Content></Content>
          <Content></Content>
          <Content></Content>
          <Content></Content>
          <Content></Content>
        </div>
      </div>
      <div className="main2-content">
        <p className="heading-main2 margin-next-head-main2">
          Best Places to Eat Across Cities
        </p>
        <div className="cont-flex">
          <Content></Content>
          <Content></Content>
          <Content></Content>
          <Content></Content>
          <Content></Content>
          <Content></Content>
          <Content></Content>
          <Content></Content>
          <Content></Content>
          <Content></Content>
          <Content></Content>
          <Content></Content>
        </div>
      </div>
      <div className="main2-content">
        <p className="heading-main2 margin-next-head-main2">
          Best Places to Eat Across Cities
        </p>
        <div className="cont-flex">
          <ContentBig></ContentBig>
          <ContentBig></ContentBig>
        </div>
      </div>
      <div className="gapbtw"></div>
      <Footer></Footer>
    </div>
  );
}

export default Home;

import React, { useEffect, useState } from "react";
import dosa from "../assets/images/dosa.png";
import { Link } from "react-router-dom";
import discount from "../assets/images/discount.png";

function Cart({ name, price }) {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    const storedDishes = JSON.parse(localStorage.getItem("dishes_ordered"));
    if (storedDishes) {
      setDishes(storedDishes);
    }
  }, []);

  const [itemCount, setItemCount]=useState(1);
  const addItem=(id)=>{
    setItemCount(itemCount+1);
  }
  const deleteItem =(id)=>{
    setItemCount(itemCount-1);
  }
  console.log(name);
  console.log(price);
  return (
    <div className="cart-main">
      <div className="cart-main-res">
        <div className="flexx color cart-padding">
          <div className="">
            <img
              className="dishes-image"
              src={dosa}
              alt="dish-image"
              width={52}
              height={56}
            ></img>
          </div>
          <div className="col">
            <div className="dishes-items">
              <p>Restaurant name</p>
            </div>
            <div className="dishes-items-price">
              <p>Place</p>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll">
        
        {dishes.map((di, index) => (
          <div className="cart-items" key={index}>
            <p>{di.name}</p>
            <div className="btn-add-rem">
              <button onClick={deleteItem(index)}>-</button>
              <p>{itemCount}</p>
              <button onClick={addItem(index)}>+</button>
            </div>
            <div>
              <p>{di.price}</p>
            </div>
          </div>
        ))}

        <hr></hr>
        <div className=" div2">
          <textarea placeholder="Any suggestions? We will pass it on..."></textarea>
          <div className="cart-checkbox">
            <input type="checkbox"></input>
            <div className="cart-check-desc">
              <h6>Opt in for No-contact Delivery</h6>
              <p>
                Unwell, or avoiding contact? Please select no-contact delivery.
                Partner will safely place the order outside your door (not for
                COD)
              </p>
            </div>
          </div>
          <div className="cart-coupon">
            <span>
              <img src={discount} width={20} height={20}></img>
            </span>
            <span>
              <p>Apply Coupon</p>
            </span>
          </div>
          <p>Bill Details</p>
          <div>
            <div className="cart-bill">
              <p>asdfg</p>
              <p>123</p>
            </div>
            <div className="cart-bill">
              <p>asdfg</p>
              <p>123</p>
            </div>
            <hr></hr>
            <div className="cart-bill">
              <p>asdfg</p>
              <p>123</p>
            </div>
            <div className="cart-bill">
              <p>asdfg</p>
              <p>123</p>
            </div>
            <div className="cart-bill">
              <p>asdfg</p>
              <p>123</p>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="cart-bill tpay">
        <p>TO PAY</p>
        <p>789</p>
      </div>
    </div>
  );
}

export default Cart;

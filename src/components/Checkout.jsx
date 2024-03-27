import React from "react";
import Header from "./Header";
import Cart from "./Cart";
import Address from "./Address";
function Checkout() {
  return (
    <div className="c-main">
      <Header></Header>
      <div className="checkout-main">
        <div>
          <div className="checkout-container">
            <h5 className="margin-zero">Select delivery Address</h5>
            <p className="margin-zero">
              You have a saved address in this location
            </p>
            <div className="checkout-address">
              <Address></Address>
              <Address></Address>
            </div>
          </div>
          <div className="checkout-payment">
            <p>Payment</p>
          </div>
        </div>

        <Cart></Cart>
      </div>
    </div>
  );
}

export default Checkout;

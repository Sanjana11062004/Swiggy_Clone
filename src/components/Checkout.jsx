import React from "react";
import Header from "./Header";
import Cart from "./Cart";
import Address from "./Address";
function Checkout() {
  return (
    <div>
      <Header></Header>
      <div className="checkout-main">
        <div className="checkout-container">
          <div> 
            <div className="checkout-address">
              <Address></Address>
              <Address></Address>
            </div>
            <div></div>
          </div>
          <Cart></Cart>
        </div>
      </div>
    </div>
  );
}

export default Checkout;

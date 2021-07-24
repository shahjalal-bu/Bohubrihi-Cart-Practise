import React from "react";

const Cart = props => {
  const cart = props.cart;
  console.log(cart);


  let totalPrice = cart.reduce((total, prd) => total + +((prd.price).replace('৳',"")).replace(",",""), 0);
  totalPrice = totalPrice.toFixed(2);
  console.log(totalPrice);

  

  return (
    <div>
      <h4>Order Summary</h4>
      <p>Items Ordered: {cart.length}</p>
     
      <p>Total Price: ৳ {totalPrice}</p>
    </div>
  );
};

export default Cart;

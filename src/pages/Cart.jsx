//Show all cart items with their quantities, allow adjustments, show total cart value.
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import '../styles/Cart.css'; // Adjust the path as necessary

const Cart = () => {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useContext(CartContext);

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cartItems.length === 0) return <p>Your cart is empty.</p>;

  return (
    <div className="cart-page">
      <h2>Your Shopping Cart</h2>
      {cartItems.map(item => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name} className="cart-img" />
          <div>
            <h4>{item.name}</h4>
            <p>Price: {item.price} ₫</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => increaseQuantity(item.id)}>+</button>
            <button onClick={() => decreaseQuantity(item.id)}>-</button>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      <h3>Total: {total} ₫</h3>
      <button className="checkout-button" onClick={() => alert(`Proceeding to checkout with total: ${total} ₫`)}>
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Cart;

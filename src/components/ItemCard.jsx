// is a reusable React component that displays information about one product.
// src/components/ItemCard.jsx
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import"../styles/ItemCard.css"

const ItemCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const isNewArrival = product.views < 10;
  // Inside ItemCard.jsx render:
{product.views < 10 && <div className="badge">New Arrival</div>}

  return (
    <div className="item-card">
      {isNewArrival && <div className="badge">New Arrival</div>}
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.name} />
      </Link>
      <h3>{product.name}</h3>
      <p>{product.price} ₫</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ItemCard;


// is a reusable React component that displays information about one product.
// src/components/ItemCard.jsx
// src/components/ItemCard.jsx
// src/components/ItemCard.jsx
// src/components/ItemCard.jsx
// src/components/ItemCard.jsx
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "../styles/ItemCard.css";

const ItemCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="item-card">
      {product.isNew && <div className="badge">New Arrival</div>} {/* Display New Arrival badge if isNew is true */}
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.name} />
      </Link>
      <h3>{product.name}</h3>
      <p>{product.price} DZD</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ItemCard;


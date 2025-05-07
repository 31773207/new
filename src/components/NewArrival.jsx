import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import ItemCard from "./ItemCard";
import "../styles/NewArrival.css";

const NewArrival = () => {
  const { products } = useContext(CartContext);

  const newArrivalProducts = products.filter(
    product => product.views > 0 && product.views < 10
  );

  if (newArrivalProducts.length === 0) return null;

  return (
    <div className="new-arrival-section">
      <h2>New Arrivals</h2>
      <div className="new-arrival-grid">
        {newArrivalProducts.map(product => (
          <ItemCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default NewArrival;
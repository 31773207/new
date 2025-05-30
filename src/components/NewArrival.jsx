// src/components/NewArrival.jsx
import React, { useContext } from "react";
import ItemCard from "./ItemCard";
import { CartContext } from "../context/CartContext";

const NewArrival = () => {
  const { products } = useContext(CartContext);

  // Filter products to show only new arrivals
  const newArrivals = products.filter(product => product.isNew || product.views < 10);

  return (
    <div className="new-arrival">
      <h2>New Arrivals</h2>
      <div className="product-grid">
        {newArrivals.length > 0 ? (
          newArrivals.map(product => (
            <ItemCard key={product.id} product={product} />
          ))
        ) : (
          <p>No new arrivals yet.</p>
        )}
      </div>
    </div>
  );
};

export default NewArrival;


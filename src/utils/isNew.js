// src/components/NewArrival.jsx
import React, { useContext } from "react";
import ItemCard from "./ItemCard"; // Assuming ItemCard is the reusable component that displays product info
import { CartContext } from "../context/CartContext";

const NewArrival = () => {
  const { products } = useContext(CartContext);

  // Filter products to show only those that are marked as 'isNew: true'
  const newArrivals = products.filter(product => product.isNew);

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

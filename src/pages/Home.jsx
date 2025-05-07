//main pages like Home, ProductDetail, Cart 
//Home Page to Display All Products
// src/pages/Home.jsx
// src/pages/Home.jsx
import React, { useContext } from "react";
import ItemCard from "../components/ItemCard";
import { CartContext } from "../context/CartContext";
import "../styles/Home.css";

const Home = ({ searchTerm }) => { // ✅ Accept searchTerm as a prop
  const { products } = useContext(CartContext);

  // ✅ Filter only new products and apply search
  const filteredNewArrivals = products
    .filter(product => product.isNew)
    .filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <>
      <div className="hero-banner">
        <div className="hero-text">
          <h1>Welcome to Eat & Love & Repeat</h1>
          <p>Authentic Flavors, Fresh Ingredients</p>
        </div>
      </div>

      <div className="new-arrival">
        <h2>New Arrivals</h2>
        <div className="product-grid">
          {filteredNewArrivals.length > 0 ? (
            filteredNewArrivals.map(product => (
              <ItemCard key={product.id} product={product} />
            ))
          ) : (
            <p>No new arrivals match your search.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;

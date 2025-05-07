//main pages like Home, ProductDetail, Cart 
//Home Page to Display All Products
// src/pages/Home.jsx
import React, { useContext } from "react";
import ItemCard from "../components/ItemCard";
import { CartContext } from "../context/CartContext";
import NewArrival from "../components/NewArrival";
import "../styles/Home.css";

const Home = ({ searchTerm }) => {
  const { products } = useContext(CartContext);

  const filteredProducts = products.filter(product =>
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

      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <ItemCard key={product.id} product={product} />
          ))
        ) : (
          <p>No products match your search.</p>
        )}
      </div>

      <NewArrival />
    </>
  );
};

export default Home;

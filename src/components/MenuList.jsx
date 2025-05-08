// src/components/MenuList.jsx
import React from "react";
import ItemCard from "./ItemCard";
import "./MenuList.css"

const MenuList = ({ products, selectedCategory }) => {
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(p => p.category === selectedCategory);

  if (!filteredProducts || filteredProducts.length === 0) {
    return <p>No products to display.</p>;
  }

  return (
    <div className="product-grid">
      {filteredProducts.map(product => (
        <ItemCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default MenuList;
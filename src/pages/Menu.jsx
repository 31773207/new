// src/pages/Menu.jsx
import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import MenuList from "../components/MenuList";
import "../styles/Menu.css";
import "../components/MenuList";


const Menu = () => {
  const { products } = useContext(CartContext);

  const categories = ["All", ...new Set(products.map(p => p.category))];
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div className="menu-page">
      <h1>Our Menu</h1>
      <div className="category-buttons">
        {categories.map(category => (
          <button
            key={category}
            className={category === selectedCategory ? "active" : ""}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <MenuList products={products} selectedCategory={selectedCategory} />
    </div>
  );
};

export default Menu;
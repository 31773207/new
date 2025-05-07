//  Navbar component that includes navigation links and displays the number of items in the shopping cart.
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "../styles/Navbar.css";
import Logo from "../assets/photo_2025-05-07_09-58-26.jpg";


const Navbar = ({ searchTerm, setSearchTerm }) => {
  const { cartItems } = useContext(CartContext);
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/" className="logo-link">
          <img
            src={Logo}
            alt="Logo"
            className="logo"
          />
        </Link>
      </div>

      <div className="nav-center">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/menu" className="nav-link">Menu</Link>
        <Link to="/about" className="nav-link">About Us</Link>
      </div>

      <div className="nav-right">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="nav-search-input"
          />
          <button className="search-button" aria-label="Search">🔍</button>
        </div>
        <Link to="/cart" className="cart-link">
          Cart <span className="cart-count">({totalQuantity})</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
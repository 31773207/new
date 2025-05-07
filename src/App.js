//Setup Routing with React Router
//Modify App.js to Include Routing:
//Use BrowserRouter, Route, and Switch (or Routes in React Router v6) to navigate between Home, Product Detail by ID, Cart pages.*/
//  The main app component
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import AboutUs from "./pages/AboutUs"; // Import the AboutUs component
import Footer from "./components/Footer";
import LoginPopup from "./components/LoginPopup";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [user, setUser ] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleLoginSuccess = (userData) => {
    setUser (userData);
  };

  const handleLogout = () => {
    setUser (null);
  };

  return (
    <CartProvider>
      <Router>
        <Navbar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          setShowLogin={setShowLogin}
          user={user}
          handleLogout={handleLogout}
        />
        <main>
          <Routes>
            <Route path="/" element={<Home searchTerm={searchTerm} />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<AboutUs />} /> {/* Add AboutUs route */}
          </Routes>
        </main>
        <Footer />
        {showLogin && (
          <LoginPopup setShowLogin={setShowLogin} onLoginSuccess={handleLoginSuccess} />
        )}
      </Router>
    </CartProvider>
  );
}

export default App;


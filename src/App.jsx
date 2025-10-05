import React, { useState } from "react";
import ProductList from "./ProductList";
import CartItem from "./CartItem";
import Header from "./Header";
import "./App.css";
import AboutUs from "./AboutUs";

function App() {
  const [page, setPage] = useState("landing"); // landing | products | cart

  // Handlers for navigation
  const handleGetStartedClick = () => setPage("products");
  const handleHomeClick = () => setPage("landing");
  const handleCartClick = () => setPage("cart");
  const handleContinueShopping = () => setPage("products");

  return (
    <div className="app-container">
      <Header onHomeClick={handleHomeClick} onCartClick={handleCartClick} />
      {page === "landing" && (
        <div className="landing-page">
          <div className="background-image"></div>
          <div className="content">
            <div className="landing_content">
              <h1>Welcome To Paradise Nursery</h1>
              <div className="divider"></div>
              <p>Where Green Meets Serenity</p>
              <button
                className="get-started-button"
                onClick={handleGetStartedClick}
              >
                Get Started
              </button>
            </div>
            <div className="aboutus_container">
              <AboutUs />
            </div>
          </div>
        </div>
      )}
      {page === "products" && (
        <div className="product-list-container visible">
          <ProductList
            onHomeClick={handleHomeClick}
            onCartClick={handleCartClick}
          />
        </div>
      )}
      {page === "cart" && (
        <div className="cart-list-container visible">
          <CartItem onContinueShopping={handleContinueShopping} />
        </div>
      )}
    </div>
  );
}

export default App;

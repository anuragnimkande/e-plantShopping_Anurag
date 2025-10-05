import React from "react";
import { useSelector } from "react-redux";
import "./Header.css";

function Header({ onHomeClick, onCartClick }) {
  const cartCount = useSelector((state) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  return (
    <header className="header">
      <button className="nav-btn" onClick={onHomeClick}>
        Home
      </button>
      <h1 className="company-name">Paradise Nursery</h1>
      <button className="cart-btn" onClick={onCartClick}>
        🛒 <span className="cart-count">{cartCount}</span>
      </button>
    </header>
  );
}

export default Header;

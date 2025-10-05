import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";
import "./ProductList.css";

const products = [
  {
    name: "Snake Plant",
    cost: 12.99,
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=100&q=80",
    category: "Air Purifying",
  },
  {
    name: "Peace Lily",
    cost: 14.99,
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=100&q=80",
    category: "Flowering",
  },
  {
    name: "Aloe Vera",
    cost: 9.99,
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=100&q=80",
    category: "Succulent",
  },
  {
    name: "Spider Plant",
    cost: 11.99,
    image:
      "https://images.unsplash.com/photo-1465101178521-c1a9136a3c8b?auto=format&fit=crop&w=100&q=80",
    category: "Air Purifying",
  },
  {
    name: "Jade Plant",
    cost: 13.99,
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=100&q=80",
    category: "Succulent",
  },
  {
    name: "Orchid",
    cost: 19.99,
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=100&q=80",
    category: "Flowering",
  },
];

function ProductList({ onHomeClick, onCartClick }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const isInCart = (name) => cartItems.some((item) => item.name === name);

  // Group products by category
  const categories = [...new Set(products.map((p) => p.category))];

  return (
    <div className="product-list">
      <div className="product-list-header">
        <button className="nav-btn" onClick={onHomeClick}>
          Home
        </button>
        <button className="cart-btn" onClick={onCartClick}>
          Go to Cart
        </button>
      </div>
      {categories.map((category) => (
        <div key={category} className="product-category">
          <h2>{category}</h2>
          <div className="product-items">
            {products
              .filter((p) => p.category === category)
              .map((product) => (
                <div className="product-card" key={product.name}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                  />
                  <div className="product-name">{product.name}</div>
                  <div className="product-cost">${product.cost.toFixed(2)}</div>
                  <button
                    className="add-cart-btn"
                    disabled={isInCart(product.name)}
                    onClick={() => dispatch(addItem(product))}
                  >
                    {isInCart(product.name) ? "Added" : "Add to Cart"}
                  </button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;

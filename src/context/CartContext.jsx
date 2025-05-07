//Implement Shopping Cart State Management
import React, { createContext, useReducer, useEffect } from "react";
import { products as initialProducts } from "../data/data";

const CartContext = createContext();

const initialState = {
  cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
  products: initialProducts,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
      let newCartItems = [];
      if (itemIndex === -1) {
        newCartItems = [...state.cartItems, { ...action.payload, quantity: 1 }];
      } else {
        newCartItems = [...state.cartItems];
        newCartItems[itemIndex].quantity += 1;
      }
      return { ...state, cartItems: newCartItems };
    }
    case "REMOVE_FROM_CART": {
      const newCartItems = state.cartItems.filter(item => item.id !== action.payload);
      return { ...state, cartItems: newCartItems };
    }
    case "INCREASE_QUANTITY": {
      const newCartItems = state.cartItems.map(item =>
        item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
      );
      return { ...state, cartItems: newCartItems };
    }
    case "DECREASE_QUANTITY": {
      const newCartItems = state.cartItems.map(item =>
        item.id === action.payload && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      return { ...state, cartItems: newCartItems };
    }
    case "INCREMENT_VIEW": {
      const newProducts = state.products.map(product =>
        product.id === action.payload ? { ...product, views: product.views + 1 } : product
      );
      return { ...state, products: newProducts };
    }
    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
  }, [state.cartItems]);

  const addToCart = product => dispatch({ type: "ADD_TO_CART", payload: product });
  const removeFromCart = id => dispatch({ type: "REMOVE_FROM_CART", payload: id });
  const increaseQuantity = id => dispatch({ type: "INCREASE_QUANTITY", payload: id });
  const decreaseQuantity = id => dispatch({ type: "DECREASE_QUANTITY", payload: id });
  const incrementViewCount = id => dispatch({ type: "INCREMENT_VIEW", payload: id });

  return (
    <CartContext.Provider
      value={{
        cartItems: state.cartItems,
        products: state.products,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        incrementViewCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };

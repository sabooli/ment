import React, { createContext, useReducer } from "react";

const initialCartData = [];

const cartReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_CART_DATA":
      return [
        ...state,
        {
          titleEvent: action.payload.titleEvent,
          item: action.payload.item,
          dateEvent: action.payload.dateEvent,
          priceEvent: action.payload.priceEvent,
          id: action.payload.id,
        },
      ];
    case "REMOVE_CART_DATA":
      return state.filter((item, index) => index !== action.index);
    default:
      return state;
  }
};

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartData, dispatch] = useReducer(cartReducer, initialCartData);
console.log(cartData)
  return (
    <CartContext.Provider value={{ cartData, dispatch }} >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;

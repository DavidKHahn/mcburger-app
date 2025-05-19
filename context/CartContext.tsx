import React, { createContext, useContext, useReducer, ReactNode } from "react";
import { Burger } from "../types";
import { CartItem } from "../types";

type CartState = {
  items: CartItem[];
};

type CartAction =
  | { type: "ADD_TO_CART"; item: Burger }
  | { type: "REMOVE_FROM_CART"; id: string }
  | { type: "INCREMENT"; id: string }
  | { type: "DECREMENT"; id: string }
  | { type: "CLEAR_CART" };

const CartContext = createContext<
  | {
      cart: CartState;
      dispatch: React.Dispatch<CartAction>;
    }
  | undefined
>(undefined);

const initialState: CartState = {
  items: [],
};

export const cartReducer = (
  state: CartState,
  action: CartAction
): CartState => {
  console.log("Cart action dispatched:", action); // log every action

  switch (action.type) {
    case "ADD_TO_CART": {
      const exists = state.items.find((item) => item.id === action.item.id);
      if (exists) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.item.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return {
        ...state,
        items: [...state.items, { ...action.item, quantity: 1 }],
      };
    }
    case "INCREMENT":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    case "DECREMENT":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.id),
      };
    case "CLEAR_CART":
      return initialState;
    default:
      return state;
  }
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
};

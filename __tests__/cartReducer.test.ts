import { Burger } from "../types";
import { cartReducer } from "../context/CartContext";

const sampleBurger: Burger = {
  id: "1",
  name: "Burger A",
  price: 500,
  image: "",
  description: "Tasty",
  calorie: 600,
};

describe("cartReducer", () => {
  it("should add item to cart", () => {
    const state = { items: [] };
    const action = { type: "ADD_TO_CART", item: sampleBurger } as const;
    const newState = cartReducer(state, action);
    expect(newState.items.length).toBe(1);
    expect(newState.items[0].quantity).toBe(1);
  });

  it("should increment quantity if item already in cart", () => {
    const state = { items: [{ ...sampleBurger, quantity: 1 }] };
    const action = { type: "ADD_TO_CART", item: sampleBurger } as const;
    const newState = cartReducer(state, action);
    expect(newState.items[0].quantity).toBe(2);
  });

  it("should remove item from cart", () => {
    const state = { items: [{ ...sampleBurger, quantity: 1 }] };
    const action = { type: "REMOVE_FROM_CART", id: "1" } as const;
    const newState = cartReducer(state, action);
    expect(newState.items.length).toBe(0);
  });

  it("should clear the cart", () => {
    const state = { items: [{ ...sampleBurger, quantity: 3 }] };
    const action = { type: "CLEAR_CART" } as const;
    const newState = cartReducer(state, action);
    expect(newState.items).toEqual([]);
  });
});

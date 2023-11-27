import { createSlice } from "@reduxjs/toolkit";

// Initial state for the cart slice
const initialState = {
  products: [],
};

// Create a cart slice using createSlice
export const cartSlice = createSlice({
  name: "cart", // Name of the slice
  initialState, // Initial state defined above
  reducers: {
    // Reducer to add items to the cart
    addToCart: (state, action) => {
      // Check if the item is already in the cart
      const item = state.products.find((item) => item.id === action.payload.id);
      if (item) {
        // If the item is already in the cart, update the quantity
        item.quantity += action.payload.quantity;
      } else {
        // If the item is not in the cart, add it
        state.products.push(action.payload);
      }
    },
    // Reducer to remove an item from the cart
    removeItem: (state, action) => {
      // Filter out the item with the specified ID
      state.products = state.products.filter(item => item.id !== action.payload);
    },
    // Reducer to reset the cart to an empty state
    resetCart: (state) => {
      state.products = [];
    },
  },
});

// Export individual action creators generated by createSlice
export const { addToCart, removeItem, resetCart } = cartSlice.actions;

// Export the reducer function generated by createSlice
export default cartSlice.reducer;

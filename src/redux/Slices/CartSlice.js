import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: "cart",
    initialState: {
      items: [],
    },
    reducers: {
      addItem: (state, action) => {
        const existingItem = state.items.find(
          (item) => item.card.info.id === action.payload.card.info.id
        );
  
        if (existingItem) {
          existingItem.quantity += 1; // Increment quantity
        } else {
          state.items.push({ ...action.payload, quantity: 1 }); // Add new item
        }
      },
      removeItem: (state, action) => {
        const existingItem = state.items.find(
          (item) => item.card.info.id === action.payload
        );
  
        if (existingItem) {
          if (existingItem.quantity > 1) {
            existingItem.quantity -= 1; // Decrement quantity
          } else {
            state.items = state.items.filter(
              (item) => item.card.info.id !== action.payload
            ); // Remove item if quantity is 0
          }
        }
      },
      clearCart: (state) => {
        state.items = []; // Clear all items
      },
    },
  });
  
  export const { addItem, removeItem, clearCart } = CartSlice.actions;
  export default CartSlice.reducer;
  
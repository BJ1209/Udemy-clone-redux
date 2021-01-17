import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const newCart = [...state.cartItems, action.payload];
      console.log(newCart);
      state.cartItems = newCart;
    },
  },
});

export const { addToCart } = cartSlice.actions;
export const selectCart = (state) => state.cart.cartItems;

export default cartSlice.reducer;

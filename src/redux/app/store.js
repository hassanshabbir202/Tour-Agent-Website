import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/CartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat((store) => (next) => (action) => {
      const result = next(action);
      if (['cart/addToCart', 'cart/removeFromCart', 'cart/updateQuantity', 'cart/clearCart'].includes(action.type)) {
        localStorage.setItem('cartItems', JSON.stringify(store.getState().cart.cartItems));
      }
      return result;
    }),
});

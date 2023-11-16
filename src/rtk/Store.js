import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./slices/products-slice";
import cartSlice from "./slices/cart-slice";
import PassToggle from "./slices/PassToggle";

export const store = configureStore({
  reducer: {
    products: productsSlice,
    cart: cartSlice,
    PassToggle: PassToggle,
  },
});

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import wishReducer from "./wishSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlists: wishReducer,
  },
});

export default store;

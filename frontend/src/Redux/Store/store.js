import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import { wishSlice } from "./wishSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlists: wishSlice,
  },
});

export default store;

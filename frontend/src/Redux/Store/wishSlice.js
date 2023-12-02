import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlistItems: localStorage.getItem("wishlistItems")
    ? JSON.parse(localStorage.getItem("wishlistItems"))
    : [],
};

export const wishSlice = createSlice({
  name: "wishlistItems",
  initialState,
  reducers: {
    //add to wishList
    addToWishList: (state, action) => {},
  },
  // clear wishList items
  clearAllWishlist: (state, action) => {
    state.wishlistItems = [];
    localStorage.setItem("wishlistItems", JSON.stringify(state, wishlistItems));
  },

  removeWishItem: (state, action) => {},
});
export const { addToWishList, clearAllWishlist, removeWishItem } =
  wishSlice.actions;
export default wishSlice.reducer;

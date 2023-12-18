import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  wishlistItems: localStorage.getItem("wishlistItems")
    ? JSON.parse(localStorage.getItem("wishlistItems"))
    : [],
};

export const wishSlice = createSlice({
  name: "wishlists",
  initialState,
  reducers: {
    //add to wishList
    addToWishList: (state, action) => {
      console.log("whislist data", action.payload);
      const { name, _id } = action.payload?.item || {};
      console.log(action.payload?.item);
      //if the product alreay exist in the wishlist then dont add it again block it
      let existsItemIndex = state.wishlistItems?.findIndex(
        (item) => item._id === action.payload?._id
      );
      console.log();
      toast.success(`${name} added to cart`, {
        position: "bottom-right",
      });
      if (existsItemIndex >= 0) {
        toast.error("This product already exists in your wishlist");
      } else {
        //add the product into wishlist
        let buildWishlistItem = {
          ...action.payload,
        };
        state.wishlistItems.push(buildWishlistItem);
        localStorage.setItem(
          "wishlistItems",
          JSON.stringify(state.wishlistItems)
        );
      }
    },
    removeWishItem: (state, action) => {
      let filterItems = state.wishlistItems?.filter((wishlist) => {
        console.log(wishlist);
        return wishlist?._id !== action.payload?._id;
      });
      console.log(filterItems);
      state.wishlistItems = filterItems;
      toast.error(`${action.payload.item?.name} removed from cart`, {
        position: "bottom-right",
      });
      localStorage.setItem(
        "wishlistItems",
        JSON.stringify(state.wishlistItems)
      );
    },
    clearAllWishlist: (state, action) => {
      state.wishlistItems = [];
      localStorage.removeItem(
        "wishlistItems",
        JSON.stringify(state.wishlistItems)
      );
    },
  },
});
// export const { addToWishList, clearAllWishlist, removeWishItem } =
//   wishSlice.actions;

export const { addToWishList, clearAllWishlist, removeWishItem } =
  wishSlice.actions;
export default wishSlice.reducer;

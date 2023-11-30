import { toast } from "react-toastify";
export const UPDATE_CART = "cart/updateCart";

import { createSlice } from "@reduxjs/toolkit";

const initialCartItem = JSON.parse(localStorage.getItem("cartItems")) || [];

const cartTotal = (cartItems) => {
  const total = cartItems.reduce((total, item) => {
    if (item?.item?.offerPrice) {
      return total + item?.item?.offerPrice * item?.quantity;
    }
    return total + item?.item?.oldPrice * item?.quantity;
  }, 0);

  return total;
};

const cartSlice = createSlice({
  name: "cart",

  initialState: {
    cartItems: initialCartItem,
    cartQuantity: 0,
    cartTotal: cartTotal(initialCartItem),
  },

  reducers: {
    cleatCart: (state) => {
      state.cartItems = [];
      state.cartTotal = 0;
    },

    //?New Code
    //!updated add reducer
    add(state, action) {
      const newItem = action.payload;
      console.log("newItem:", newItem);

      const existingItem = state.cartItems.find(
        (item) => item?.item?._id === newItem?._id
      );

      if (existingItem) {
        // If the item is already in the cart, update its quantity
        existingItem.quantity += newItem.pdCount;
      } else {
        // If it's a new item, add it to the cartItems array
        state.cartItems.push({ item: newItem, quantity: newItem.pdCount });
      }
      toast.success(`${action.payload.name} Added to cart`, {
        position: "bottom-right",
      });
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      // Update the cartTotal
      state.cartTotal = cartTotal(state.cartItems);
    },

    //!updated remove reducer
    remove(state, action) {
      const itemId = action.payload.item?._id;
      console.log("actionID:", action.payload.item?._id);
      console.log("actionPayloadName:", action.payload.item?.name);
      const updatedCartItems = state.cartItems.filter((item) => {
        return item?.item?._id !== itemId;
      });
      state.cartItems = updatedCartItems;
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
      //   state.filter((item) => item._id !== action.payload);
      toast.error(`${action.payload.item?.name} removed from cart`, {
        position: "bottom-right",
      });
      state.cartTotal = cartTotal(state.cartItems);
    },

    //!updated cart item
    updateCart: (state, action) => {
      // Update cartItems
      state.cartItems = action.payload;

      // Recalculate cartTotal
      state.cartTotal = cartTotal(state.cartItems);
    },
  },
});

export const { cleatCart, add, remove, updateCart } = cartSlice.actions;

export default cartSlice.reducer;

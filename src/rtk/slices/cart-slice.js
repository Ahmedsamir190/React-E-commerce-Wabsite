import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartProduct: localStorage.getItem("cartSlice")
    ? JSON.parse(localStorage.getItem("cartSlice"))
    : [],
  cartTotalAmount: 0,
  cartTotalQuantity: 0,
};
export const cartSlice = createSlice({
  initialState,
  name: "cartSlice",
  reducers: {
    addtoCart: (state, action) => {
      const productscart = state.cartProduct.findIndex(
        (product) => product.id === action.payload.id
      );
      if (productscart >= 0) {
        state.cartProduct[productscart].quantity += 1;
      } else {
        const clone = { ...action.payload, quantity: 1 };
        state.cartProduct.push(clone);
      }
      localStorage.setItem("cartSlice", JSON.stringify(state.cartProduct));
    },

    deleteFromCart: (state, action) => {
      const removeItem = state.cartProduct.filter(
        (product) => product.id !== action.payload.id
      );
      state.cartProduct = removeItem;
      localStorage.setItem("cartSlice", JSON.stringify(state.cartProduct));
    },
    Clear: (state, action) => {
      state.cartProduct = [];
      localStorage.setItem("cartSlice", JSON.stringify(state.cartProduct));
    },
    GetTotalPrice: (state, action) => {
      const totalPrice = state.cartProduct.reduce((acc, product) => {
        acc += product.price * product.quantity;
        return acc;
      }, 0);
      state.cartTotalAmount = totalPrice;
    },
    Increment: (state, action) => {
      const itemincrement = state.cartProduct.findIndex(
        (product) => product.id === action.payload.id
      );
      if (itemincrement >= 0) {
        state.cartProduct[itemincrement].quantity += 1;
      }
      localStorage.setItem("cartSlice", JSON.stringify(state.cartProduct));
    },
    Decrement: (state, action) => {
      const itemdecrement = state.cartProduct.findIndex(
        (product) => product.id === action.payload.id
      );
      if (state.cartProduct[itemdecrement].quantity > 1) {
        state.cartProduct[itemdecrement].quantity -= 1;
      }
      localStorage.setItem("cartSlice", JSON.stringify(state.cartProduct));
    },
    GetTotalQuantity: (state, action) => {
      const totalquantity = state.cartProduct.reduce(
        (cartquantity, cartitem) => {
          return cartquantity + cartitem.quantity;
        },
        0
      );
      state.cartTotalQuantity = totalquantity;
    },
  },
});

export const {
  addtoCart,
  deleteFromCart,
  Clear,
  GetTotalPrice,
  GetTotalQuantity,
  Increment,
  Decrement,
} = cartSlice.actions;
export default cartSlice.reducer;

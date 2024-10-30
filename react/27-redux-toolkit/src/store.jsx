import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./control/cartSlice.jsx";

export const store = configureStore({
  reducer: {
    cart: cardReducer
  }
});

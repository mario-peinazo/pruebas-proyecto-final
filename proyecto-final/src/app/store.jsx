import { configureStore } from "@reduxjs/toolkit";
import carritoReducer  from "../features/carrito/carritoSlice";

export const store = configureStore({
   reducer:{ carrito: carritoReducer},
})
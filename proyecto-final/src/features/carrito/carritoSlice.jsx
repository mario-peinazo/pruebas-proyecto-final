import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { color: "amarillo", cantidad: 3 },
  { color: "azul", cantidad: 1 }
];
export const carritoSlice = createSlice({
  name: "carrito",
  initialState,
  reducers: {
    addProduct: (state, action) => {
        [...state, action.payload]
        console.log(action.payload)
    }
  },
});

export const {addProduct} = carritoSlice.actions;
export default carritoSlice.reducer;

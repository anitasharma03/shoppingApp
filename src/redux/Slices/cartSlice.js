import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: []
}

export const cartSlice = createSlice({
    name: 'itemsInCart',
    initialState,
    reducers:{
        setCart: (state,action) => {

           state.cart.push(action.payload) 
        }
    }
});

export const {setCart} = cartSlice.actions; 

export default cartSlice.reducer;
import { configureStore } from "@reduxjs/toolkit";
import filterSliceReducer from "./Slices/filterSlice";
import cartSliceReducer from "./Slices/cartSlice";

const store = configureStore({reducer:{
        productFilter: filterSliceReducer ,
        itemsInCart: cartSliceReducer
}
});

export default store;
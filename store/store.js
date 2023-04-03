import { configureStore } from "@reduxjs/toolkit";
import cartSlice  from './cartslice'

export default configureStore({
    reducer:{
        cart:cartSlice ,
    },
})
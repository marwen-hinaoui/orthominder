import { configureStore } from "@reduxjs/toolkit";
import appReducer from './slices'

export default store = configureStore({
    reducer:{
        app: appReducer,
    }
})
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterslic'

export const Store = configureStore({
    reducer: {
        counter:counterReducer
    }
})
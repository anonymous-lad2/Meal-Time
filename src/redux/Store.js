import { configureStore } from '@reduxjs/toolkit'

export const Store = configureStore({
    reducer: {
        cart: CartSlicer.reducer,
    }
})
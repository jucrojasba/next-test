import { configureStore } from "@reduxjs/toolkit"
import cartReducer from './features/cartSlice'
import cartAsideReducer from './features/cartAsideSlice'

export const store = configureStore({
    reducer: {
        cartReducer,
        cartAsideReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
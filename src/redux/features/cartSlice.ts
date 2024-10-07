import { IProducts } from "@/types/IProducts";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartState {
    cart: IProducts[];
}

const initialState: CartState = {
    cart: []
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<IProducts>) => {
            state.cart.push(action.payload)
        }
    }
})
export const { addProduct } = cartSlice.actions
export default cartSlice.reducer;
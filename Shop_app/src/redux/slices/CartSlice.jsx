import { createSlice } from "@reduxjs/toolkit";


    export const CartSlice = createSlice(
        {
            name : "cart",
            initialState : [],
            reducers : {
                AddtoCart : (state,action) => {
                    state.push(action.payload)
                },

                RemovefromCart : (state,action) => {
                    return state.filter( (removeItem) => removeItem.id !== action.payload)
                }
            }
        }
    );

export const {AddtoCart, RemovefromCart} = CartSlice.actions;
export default CartSlice.reducer;
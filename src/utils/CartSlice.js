const { createSlice } = require("@reduxjs/toolkit");


const CartSlice = createSlice({
    name: "cart",
    initialState:{
        items: [],
    },
    reducers:{
        addItems:(state,action) =>{
            state.items.push(action.payload);
        },
        removeItems:(state,action) =>{
            state.items = state.items.filter(item => item.id !== action.payload.id);
        },
        clearAllItems:(state) =>{
            state.items.length = 0;
            // state.items = [];
        }
    }
})

export const { addItems, removeItems, clearAllItems } = CartSlice.actions;
export default CartSlice.reducer;
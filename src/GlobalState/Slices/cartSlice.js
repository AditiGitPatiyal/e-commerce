import { createSlice } from "@reduxjs/toolkit";

const initialState={
    cartItems:[],
    cartTotalQuantity:0,
    cartTotalAmount:0 
}
const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            const itemIndex =state.cartItems.findIndex(
                (item)=>item.id === action.payload.id
            );
            if (itemIndex>=0){
                state.cartItems[itemIndex].cartQuantity +=1;
            } else{
                const tempProduct ={...action.payload,cartQuantity:1};
                state.cartItems.push(tempProduct);
                state.cartTotalQuantity += 1;
            }
            // state.cartTotalQuantity += 1;
            state.cartTotalAmount += action.payload.price;
            alert(`${action.payload.product_name} is added to Cart successfully.`)
        },
        removeFromCart: (state, action) => {
            const itemIndex =state.cartItems.findIndex(
                (item)=>item.id === action.payload.id
            );
            if (state.cartItems[itemIndex].cartQuantity>1){
                state.cartItems[itemIndex].cartQuantity -=1;
            }else{
                const nextCartItems =state.cartItems.filter(
                    (cartItem)=>cartItem.id !==action.payload.id
                );
                state.cartItems=nextCartItems;
                state.cartTotalQuantity -= 1;
            }
            state.cartTotalAmount -= action.payload.price;
            alert("Item is removed from cart successfully");
        },
        clearCart:(state)=>{
            state.cartItems=[];
            state.cartTotalAmount=0;
            state.cartTotalQuantity=0;
        }
    }
});
export const { addToCart, removeFromCart,clearCart } = cartSlice.actions;
export default cartSlice.reducer
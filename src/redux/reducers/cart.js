import {cartActionTypes } from '../constans/cartActionTypes';
import {addItemAddToCart,removeFromCart} from '../utils/cart';

const { CART_ADD_ITEM,CART_REMOVE_ITEM} = cartActionTypes;
const INITIAL_STATE = {
    cartItems: []
};

export const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CART_ADD_ITEM: return {
            ...state,
            cartItems: addItemAddToCart(state.cartItems,action.payload)
        };
        case CART_REMOVE_ITEM: return {
            ...state,
            cartItems: removeFromCart(state.cartItems,action.payload)
        };
        default : return state;
    }
};
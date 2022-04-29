import {cartActionTypes } from '../constans/cartActionTypes';

const { CART_ADD_ITEM,CART_REMOVE_ITEM} = cartActionTypes;


export const cartAddItem = (payload) => {
    return {
        type: CART_ADD_ITEM,
        payload: payload
    }
}

export const cartRemoveItem = (payload) => {
    return {
        type: CART_REMOVE_ITEM,
        payload: payload
    }
}
import * as types from './../constants/ActionsType';

export const actAddToCart = (product, quantity) => {
    return {
        type: types.ADD_CART,
        product,
        quantity
    }
}
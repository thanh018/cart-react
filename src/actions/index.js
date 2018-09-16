import * as Types from './../constants/ActionsType';

export const actAddToCart = (product, quantity) => {
    return {
        type: Types.ADD_CART,
        product,
        quantity
    }
}

export const actChangeMessage = (message) => {
    return {
        type: Types.CHANGE_MESSAGE,
        message
    }
}

export const actRemoveProduct = (product) => {
    return {
        type: Types.DELETE_PRODUCT,
        product
    }
}

export const actUpdateProduct = (product, quantity) => {
    return {
        type: Types.UPDATE_PRODUCT,
        product,
        quantity
    }
}
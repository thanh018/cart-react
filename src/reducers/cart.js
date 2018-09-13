import * as types from './../constants/ActionsType';

// var data = JSON.parse(localStorage).getItem('CART');

var initalState = [
    {
        product:  {
            id: 1,
            name: 'Mi 6',
            image: 'http://media.techz.vn/upload/2017/05/11/image-techz-1494437847.jpeg?7S',
            description: 'Xiaomi',
            price: 20,
            rating: 5,
        },
        quantity: 5
    },
    {
        product: {
            id: 2,
            name: 'iphone 8 plus',
            image: 'https://cdn.shopify.com/s/files/1/1671/4741/products/Bare_Naked_for_S8_-_5_2000x.jpg?v=1507861616',
            description: 'Apple',
            price: 50,
            rating: 4,
        },
        quantity: 9
    }
] ;

const cart = (state = initalState, action) => {
    switch(action.type) {
        case types.ADD_CART:
        console.log(action);
            return [...state];
        default: return [...state];
    }
}

export default cart;
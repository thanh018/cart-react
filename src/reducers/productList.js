

var initalState = [
    {
        id: 1,
        name: 'Mi 6',
        image: 'http://media.techz.vn/upload/2017/05/11/image-techz-1494437847.jpeg?7S',
        description: 'Xiaomi',
        price: 50,
        rating: 5,
    },

    {
        id: 2,
        name: 'iphone 8 plus',
        image: 'https://cdn.shopify.com/s/files/1/1671/4741/products/Bare_Naked_for_S8_-_5_2000x.jpg?v=1507861616',
        description: 'Apple',
        price: 50,
        rating: 4,
    },
    {
        id: 3,
        name: 's8 plus',
        image: 'https://media.karousell.com/media/photos/products/2017/11/03/apple_iphone_7_plus_128gb_matt_black_1509719677_7c6a90bb.jpg',
        description: 'Samsung',
        price: 50,
        rating: 2,
    }
];

const productList = (state = initalState, action) => {
    switch(action.type) {
        default: return [...state];
    }
}

export default productList;

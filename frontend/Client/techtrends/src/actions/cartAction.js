export const addToCart = (item) => (dispatch, getState) => {
    const cartItem = {
        name: item.name,
        _id: item._id,
        image: item.image,
        price: item.price,
    };

    dispatch({ type: "ADD_TO_CART", payload: cartItem });
    localStorage.setItem('cartItems', JSON.stringify(getState().cartReducer.cartItems));
};

export const removeFromCart = (itemId) => (dispatch, getState) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: itemId });
    localStorage.setItem('cartItems', JSON.stringify(getState().cartReducer.cartItems));
};

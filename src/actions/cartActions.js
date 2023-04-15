import axios from 'axios';
import { ADD_TO_CART, REMOVE_ITEM_CART, SAVE_SHIPPING_INFO, INCREAMENT_TO_QUANTITY, DECREAMENT_ITEM_QUANTITY,CLEAR_CART } from '../constants/cartConstants';

export const addItemToCart = (id, quantity) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/v1/product/${id}`);

    dispatch({
        type: ADD_TO_CART,
        payload: {
            product: data.product._id,
            name: data.product.name,
            price: data.product.price,
            image: data.product.images[0].url,
            stock: data.product.stock,
            quantity,
        },
    });

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const removeItemFromCart = (id) => async (dispatch, getState) => {
    dispatch({
        type: REMOVE_ITEM_CART,
        payload: id,
    });

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const saveShippingInfo = (data) => async (dispatch) => {
    dispatch({
        type: SAVE_SHIPPING_INFO,
        payload: data,
    });

    localStorage.setItem('shippingInfo', JSON.stringify(data));
};

export const incrementItemQuantity = (id) => async (dispatch, getState) => {
    const { cartItems } = getState().cart;
    const itemIndex = cartItems.findIndex((item) => item.product === id);

    if (itemIndex !== -1) {
        const updatedCartItems = [...cartItems];
        updatedCartItems[itemIndex].quantity += 1;

        dispatch({
            type: INCREAMENT_TO_QUANTITY,
            payload: updatedCartItems,
        });

        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    }
};

export const decrementItemQuantity = (id) => async (dispatch, getState) => {
    const { cartItems } = getState().cart;
    const itemIndex = cartItems.findIndex((item) => item.product === id);

    if (itemIndex !== -1) {
        const updatedCartItems = [...cartItems];
        updatedCartItems[itemIndex].quantity -= 1;

        dispatch({
            type: DECREAMENT_ITEM_QUANTITY,
            payload: updatedCartItems,
        });

        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    }
};
export const clearCart = () => async (dispatch) => {
    dispatch({
        type: CLEAR_CART
    });

    localStorage.removeItem('cartItems'); // Remove cartItems from localStorage
};


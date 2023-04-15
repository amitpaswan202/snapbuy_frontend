import { ADD_TO_CART, REMOVE_ITEM_CART, SAVE_SHIPPING_INFO, INCREAMENT_TO_QUANTITY, DECREAMENT_ITEM_QUANTITY ,CLEAR_CART} from '../constants/cartConstants';

export const cartReducer = (state = { cartItems: [], shippingInfo: {} }, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const item = action.payload;

            const isItemExist = state.cartItems.find(i => i.product === item.product);

            if (isItemExist) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(i =>
                        i.product === isItemExist.product ? { ...item, quantity: i.quantity + 1 } : i
                    )
                };
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, { ...item, quantity: 1 }]
                };
            }

        case REMOVE_ITEM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(i => i.product !== action.payload)
            };

        case SAVE_SHIPPING_INFO:
            return {
                ...state,
                shippingInfo: action.payload
            };

        case INCREAMENT_TO_QUANTITY:
            return {
                ...state,
                cartItems: state.cartItems.map(i =>
                    i.product === action.payload ? { ...i, quantity: i.quantity + 1 } : i
                )
            };

        case DECREAMENT_ITEM_QUANTITY:
            return {
                ...state,
                cartItems: state.cartItems.map(i =>
                    i.product === action.payload ? { ...i, quantity: i.quantity - 1 } : i
                )
            };
            case CLEAR_CART: // Add case for CLEAR_CART action type
            return {
                ...state,
                cartItems: [] // Empty cartItems array
            };

        default:
            return state;
    }
};

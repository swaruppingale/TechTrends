const initialState = {
    order: null,
    loading: false,
    error: null,
    success: false,
};

export const checkoutReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ORDER_REQUEST':
            return { ...state, loading: true, error: null, success: false };
        case 'ORDER_SUCCESS':
            return { ...state, loading: false, order: action.payload.order, success: true, error: null };
        case 'ORDER_FAILED':
            return { ...state, loading: false, error: action.payload, success: false };
        case 'RESET_ORDER':
            return initialState;
        default:
            return state;
    }
};

export const getAllItemReducer = (state = { items: [], loading: false, error: null }, action) => {
    switch (action.type) {
        case 'GET_ITEMS_REQUEST':
            return { ...state, loading: true };
        case 'GET_ITEMS_SUCCESS':
            return { ...state, items: action.payload, loading: false };
        case 'GET_ITEMS_FAIL':
            return { ...state, error: action.payload, loading: false };
        default:
            return state;
    }
};

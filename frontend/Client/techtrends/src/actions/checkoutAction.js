import axios from 'axios';

export const saveOrderToDatabase = (orderDetails) => async (dispatch) => {
    try {
        dispatch({ type: 'ORDER_REQUEST' });

        const { data } = await axios.post('http://localhost:8080/api/checkout', orderDetails);

        dispatch({ type: 'ORDER_SUCCESS', payload: data });
    } catch (error) {
        dispatch({ type: 'ORDER_FAILED', payload: error.response.data });
    }
};

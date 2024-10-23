import axios from 'axios';

export const getAllitems = () => async (dispatch) => {
    dispatch({ type: 'GET_ITEMS_REQUEST' });
    try {
        const response = await fetch("http://localhost:8080/api/items/getAllItems", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await response.json();
        dispatch({ type: 'GET_ITEMS_SUCCESS', payload: data });
    } catch (error) {
        dispatch({ type: 'GET_ITEMS_FAIL', payload: error.message });
    }
};

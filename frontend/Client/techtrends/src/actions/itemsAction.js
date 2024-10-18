import axios from 'axios';

export const getAllitems = () => async (dispatch) => {
    dispatch({ type: 'GET_ITEMS_REQUEST' });
    try {
        const response = await fetch("http://localhost:8080/api/items/getAllItems", {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            
          });
        const data = await response.json();
        console.log('API Response:', data); // Log the response data
        dispatch({ type: 'GET_ITEMS_SUCCESS', payload: data });
    } catch (err) {
        console.error('Error fetching items:', err); // Log the error
        dispatch({ type: 'GET_ITEMS_FAIL', payload: err });
    }
};

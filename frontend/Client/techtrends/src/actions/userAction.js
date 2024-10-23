import axios from "axios";

// Register user action
export const registeruser = (user) => async (dispatch) => {
    dispatch({ type: 'USER_REGISTER_REQUEST' });
    try {
        const { data } = await axios.post('http://localhost:8080/api/users/register', user);
        dispatch({ type: 'USER_REGISTER_SUCCESS', payload: data });
    } catch (error) {
        dispatch({ 
            type: 'USER_REGISTER_FAIL', 
            payload: error.response && error.response.data.message ? error.response.data.message : error.message 
        });
    }
};

export const loginuser = (user) => async (dispatch) => {
    dispatch({ type: 'USER_LOGIN_REQUEST' });
    try {
        const { data } = await axios.post('http://localhost:8080/api/users/login', user);
        dispatch({ type: 'USER_LOGIN_SUCCESS', payload: data });
        localStorage.setItem('currentUser', JSON.stringify(data)); // Store current user data including ID
        window.location.href = '/';
    } catch (error) {
        dispatch({ 
            type: 'USER_LOGIN_FAIL', 
            payload: error.response && error.response.data.message ? error.response.data.message : error.message 
        });
    }
};


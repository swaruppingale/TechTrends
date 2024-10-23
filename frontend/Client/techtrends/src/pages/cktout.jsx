import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { saveOrderToDatabase } from '../actions/checkoutAction';

const Checkout = () => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { cartItems } = useSelector(state => state.cartReducer); // Your cart reducer
    const { currentUser: user } = useSelector(state => state.loginUserReducer); // Your login reducer
    const checkoutState = useSelector(state => state.checkout || {}); // Ensure the checkout state is not undefined
    const { success: orderSuccess, error: orderError } = checkoutState;

    useEffect(() => {
        if (!user) navigate('/');
    }, [user, navigate]);

    useEffect(() => {
        if (orderSuccess) {
            setSuccess('Checkout successful!');
            setTimeout(() => {
                navigate('/home');
            }, 2000);
        }
        if (orderError) {
            setError(orderError.message);
        }
    }, [orderSuccess, orderError, navigate]);

    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    const handleCheckout = () => {
        if (password === 'yes') {
            const orderDetails = {
                userId: user._id,
                items: cartItems,
                totalAmount,
                password,
            };

            dispatch(saveOrderToDatabase(orderDetails));
        } else {
            setError('Incorrect password. Please try again.');
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <h1 className="text-2xl font-semibold mb-4">Checkout</h1>
            <div className="mb-4">
                <h2 className="text-xl">Total Amount: USD {totalAmount}</h2>
            </div>
            <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-semibold">
                    Enter 'yes' to complete the checkout
                </label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-1 w-full p-2 border rounded"
                />
            </div>
            {error && <p className="text-red-500">{error}</p>}
            {success && <p className="text-green-500">{success}</p>}
            <button
                onClick={handleCheckout}
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300"
            >
                Confirm Checkout
            </button>
        </div>
    );
};

export default Checkout;

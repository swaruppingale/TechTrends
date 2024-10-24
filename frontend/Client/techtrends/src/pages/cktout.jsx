import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { saveOrderToDatabase } from '../actions/checkoutAction';
import Header from "./Header";
import Navbar from "./Navbar";
const Checkout = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [showModal, setShowModal] = useState(false);  // Modal state
    const [orderDetails, setOrderDetails] = useState({})
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { cartItems } = useSelector(state => state.cartReducer); // Cart reducer
    const { currentUser: user } = useSelector(state => state.loginUserReducer); // Login reducer
    const checkoutState = useSelector(state => state.checkout || {}); // Checkout state
    const { success: orderSuccess, error: orderError } = checkoutState;
    const [orderState, setOrderState] = useState(0);

    useEffect(() => {
        if (!user) navigate('/'); // Redirect if not logged in
    }, [user, navigate]);
    useEffect(() => {
      if(!localStorage.getItem("cartItems")){
        navigate('/home');
      }
    
      
    }, [])
    
    useEffect(() => {
        if (orderState) {
            dispatch(saveOrderToDatabase(orderDetails));
            setSuccess('Order placed successfully!');
            setShowModal(true);
            localStorage.removeItem('cartItems'); // Clear cart items from localStorage
            window.location.reload();
            
            setTimeout(() => {
                navigate('/home');
            }, 1000);
             // Redirect after 3 seconds
        }
        if (orderError) {
            setError(orderError.message);
            setShowModal(true);
        }
        
    }, [orderSuccess, orderError, navigate,orderDetails]);

    const totalAmount = cartItems.reduce((total, item) => total + item.price , 0);
    console.log(totalAmount)
    const handleCheckout = () => {
        // const orderDetails = {

        //     items: cartItems,
        //     totalAmount
        // };
        setOrderDetails({
            items: cartItems,
            totalAmount
        })
        dispatch(saveOrderToDatabase(orderDetails));
        setOrderState(1); // Dispatch order
        console.log(orderDetails)
    };
    
    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <Header/>
            <div className='text-white'>.</div>
            <div className='text-white'>.</div>
            <h1 className="text-2xl font-semibold mb-4">Checkout</h1>

            {/* Order Summary */}
            <div className="bg-white p-4 shadow rounded-lg">
                <h2 className="text-xl font-semibold mb-2">Order Summary</h2>
                {cartItems.map(item => (
                    <div key={item._id} className="flex justify-between items-center mb-2">
                        <span>{item.name} (x{1})</span>
                        <span>₹{item.price * 1}</span>
                    </div>
                ))}
                <div className="flex justify-between font-semibold mt-4 border-t pt-4">
                    <span>Total Amount</span>
                    <span>₹{totalAmount}</span>
                </div>
            </div>

            {/* Place Order Button */}
            <button
                onClick={handleCheckout}
                className="mt-6 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300"
            >
                Place Order
            </button>
            <Navbar/>
            {/* Modal for success/failure message */}
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        if(orderState){


                        }
                        {/* {orderSuccess && <p className="text-green-500">order placed successfully!!{success}</p>}
                        {orderError && <p className="text-red-500">order failed!!{error}</p>} */}
                        {/* <button
                            onClick={() => setShowModal(false)}
                            className="mt-4 bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 transition duration-300"
                        >
                            Close
                        </button> */}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Checkout;

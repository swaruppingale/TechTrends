import React from 'react';
import Header from "./Header";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from "../actions/cartAction";
import { useNavigate } from 'react-router-dom';

export default function Cart() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { cartItems } = useSelector(state => state.cartReducer);

    const handleRemoveFromCart = (itemId) => {
        dispatch(removeFromCart(itemId));
    };

    const handleProceedToCheckout = () => {
        navigate('/checkout');
    };

    return (
        <div className="min-h-screen bg-white p-4">
            <Header />
            <div className='text-white'>.</div>
            <div className='text-white'>.</div>
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-xl font-semibold">Shopping Cart</h1>
                <span className="text-lg">Total Items: {cartItems.length}</span>
            </div>

            <div className="mt-6">
                <h2 className="text-xl font-semibold mb-2">Items in Cart</h2>
                {cartItems.length === 0 ? (
                    <p>No items in the cart</p>
                ) : (
                    cartItems.map(item => (
                        <div key={item._id} className="flex items-center justify-between border p-2 mb-2 rounded">
                            <div className="flex items-center">
                                <img src={item.image} alt={item.name} className="w-12 h-12 rounded" />
                                <div className="flex-1 ml-4">
                                    <h2 className="text-sm font-semibold">{item.name}</h2>
                                    <p className="text-sm text-gray-500">₹{item.price}</p>
                                </div>
                            </div>
                            <button
                                onClick={() => handleRemoveFromCart(item._id)}
                                className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 transition duration-300"
                            >
                                Remove
                            </button>
                        </div>
                    ))
                )}

                {cartItems.length > 0 && (
                    <div className="mt-4 flex justify-between text-sm text-gray-500">
                        <span>Total {cartItems.length} Items</span>
                        <span className="text-black">
                        ₹{cartItems.reduce((total, item) => total + item.price, 0)}
                        </span>
                    </div>
                )}

                {cartItems.length > 0 && (
                    <button
                        onClick={handleProceedToCheckout}
                        className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300"
                    >
                        Proceed to Checkout
                    </button>
                )}
            </div>
            <Navbar />
        </div>
    );
}

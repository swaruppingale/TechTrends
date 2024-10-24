import React, { useEffect, useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "tailwindcss/tailwind.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllitems } from "../actions/itemsAction";
import { Link, useNavigate } from 'react-router-dom';
import Header from "./Header";
import Navbar from "./Navbar";
import { addToCart } from "../actions/cartAction";

const Home = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const itemstate = useSelector((state) => state.getAllItemReducer);
    const { loading, items, error } = itemstate;
    
    const userState = useSelector((state) => state.loginUserReducer);
    const { currentUser } = userState;
    
    const [itemsList, setItemsList] = useState([]);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (!currentUser) {
            // Show modal for 2 seconds before redirecting
            setShowModal(true);
            setTimeout(() => {
                setShowModal(false);
                navigate("/");
            }, 2000);
        } else {
            dispatch(getAllitems());
        }
    }, [dispatch, currentUser, navigate]);

    const handleAddToCart = (item) => {
        dispatch(addToCart(item));
    };

    return (
        <div className="h-screen flex flex-col bg-gray-100">
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                        <h2 className="text-2xl font-bold text-red-600 mb-4">Please log in to continue</h2>
                        <p className="mb-4">Redirecting to login page...</p>
                    </div>
                </div>
            )}

            {currentUser && (
                <>
                    <Header />
                    <div className="flex-grow mt-[70px] p-4 bg-gray-100">
                        <div className="mb-4 px-4">
                            <p className="text-3xl font-bold leading-tight">Hi, {currentUser.name}</p>
                            <h1 className="text-2xl font-semibold leading-tight">
                                What are you looking for today?
                            </h1>
                        </div>
                        <div>
                            {loading ? (
                                <h1>Loading...</h1>
                            ) : error ? (
                                <h1>ERROR WHILE FETCHING ITEMS</h1>
                            ) : Array.isArray(items) && items.length > 0 ? (
                                <div className="px-4">
                                    <div className="flex justify-between items-center mb-4">
                                        <h2 className="text-xl font-semibold">Featured Products</h2>
                                    </div>
                                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                        {items.map((item, index) => (
                                            <div key={index} className="p-4 bg-white rounded-lg shadow">
                                                <Link to={`/review/${item.name}`} state={{ item }}>
                                                    <img src={item.image} alt={item.name} className="mb-2 w-full object-cover" />
                                                    <h3 className="text-lg font-semibold">{item.name}</h3>
                                                    <p className="text-gray-500">₹{item.price}/-</p>
                                                </Link>
                                                <button
                                                    onClick={() => handleAddToCart(item)}
                                                    className="mt-2 w-full bg-[#0ACF83] text-white py-2 px-4 rounded hover:bg-[#0ACF83]"
                                                >
                                                    Add to Cart
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <h2>No products available</h2>
                            )}
                        </div>
                    </div>
                    <div className="text-white">.</div>
                    <div className="text-white">.</div>
                    <div className="text-white">.</div>
                    <Navbar />
                </>
            )}
        </div>
    );
};

export default Home;

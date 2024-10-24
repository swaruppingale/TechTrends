import React, { useEffect, useState } from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import axios from "axios";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const userId = JSON.parse(localStorage.getItem("currentUser"));
  console.log(userId._id)

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        // Assuming your API URL is something like this
         // Getting userId from localStorage
        const response = await fetch(`http://localhost:8080/api/orders/orders/${userId._id}`);

        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        setOrders(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="min-h-screen bg-white p-4">
      <Header />
      <div className="text-white">.</div>
      <div className="text-white">.</div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold">My Orders</h1>
      </div>

      {orders.length === 0 ? (
        <p>Loading......</p>
      ) : (
        <div>
            {orders.map(order => (
                <div key={order._id} className="border p-4 mb-4 rounded">
                    <h2 className="text-lg font-semibold">Order Date: {order.date}</h2>
                    <h3 className="text-md mb-2">Total Amount: ₹{order.totalAmount}</h3>
                    <div>
                        {order.items.map(item => (
                            <div key={item._id} className="flex items-center justify-between mb-2">
                                <div className="flex items-center">
                                    <img src={item.image} alt={item.name} className="w-12 h-12 rounded" />
                                    <div className="ml-4">
                                        <h2 className="text-sm font-semibold">{item.name}</h2>
                                        <p className="text-sm">₹{item.price}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
            ))}
        </div>
      )}

      <Navbar />
    </div>
  );
}

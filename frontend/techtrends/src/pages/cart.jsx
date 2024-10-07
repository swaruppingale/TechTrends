import React, { useState } from 'react';

export default function Cart() {
  // State to keep track of items in the cart
  const [cartItems, setCartItems] = useState([]);

  // List of sample products for adding to the cart
  const products = [
    { id: 1, name: 'TMA-2 Comfort Wireless', price: 270, image: 'https://placehold.co/50x50' },
    { id: 2, name: 'CO2 – Cable', price: 25, image: 'https://placehold.co/50x50' },
  ];

  // Function to add a product to the cart
  const addToCart = (product) => {
    setCartItems([...cartItems, product]); // Adds the selected product to the cart
  };

  // Function to handle removing an item from the cart
  const removeFromCart = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index); // Removes item by index
    setCartItems(updatedCart);
  };

  return (
    <div className="min-h-screen bg-white p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold">Shopping Cart</h1>
        <span className="text-lg">Total Items: {cartItems.length}</span>
      </div>

      {/* Product Listing Section */}
      <div className="space-y-4">
        {products.map((product) => (
          <div key={product.id} className="flex items-center justify-between border p-2 rounded">
            <img src={product.image} alt={product.name} className="w-12 h-12 rounded" />
            <div className="flex-1 ml-4">
              <h2 className="text-sm font-semibold">{product.name}</h2>
              <p className="text-sm text-gray-500">USD {product.price}</p>
            </div>
            <button
              onClick={() => addToCart(product)}
              className="bg-green-500 text-white py-1 px-3 rounded hover:bg-green-600 transition duration-300">
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Display Cart Items */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Items in Cart</h2>
        {cartItems.length === 0 ? (
          <p>No items in the cart</p>
        ) : (
          cartItems.map((item, index) => (
            <div key={index} className="flex items-center justify-between border p-2 mb-2 rounded">
              <div className="flex items-center">
                <img src={item.image} alt={item.name} className="w-12 h-12 rounded" />
                <div className="flex-1 ml-4">
                  <h2 className="text-sm font-semibold">{item.name}</h2>
                  <p className="text-sm text-gray-500">USD {item.price}</p>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(index)}
                className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 transition duration-300">
                Remove
              </button>
            </div>
          ))
        )}

        {/* Total Price Calculation */}
        {cartItems.length > 0 && (
          <div className="mt-4 flex justify-between text-sm text-gray-500">
            <span>Total {cartItems.length} Items</span>
            <span className="text-black">
              USD {cartItems.reduce((total, item) => total + item.price, 0)}
            </span>
          </div>
        )}

        {/* Proceed to Checkout Button */}
        {cartItems.length > 0 && (
          <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300">
            Proceed to Checkout
          </button>
        )}
      </div>
    </div>
  );
}

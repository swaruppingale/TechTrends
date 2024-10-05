import React from 'react';
import { FaApple, FaFacebook, FaGoogle } from 'react-icons/fa';
import BackgroundImg from '../assets/images/background.svg';

export default function SignUp() {
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${BackgroundImg})` }}
    >
    
      <div className="bg-white bg-opacity-75 p-8 rounded-lg shadow-lg w-80">
        <h1 className="text-2xl font-bold text-center text-white mb-2">TechTrends</h1>
        <p className="text-center text-white mb-6">It's modular and designed to last</p>
        <form className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
          >
            Sign Up
          </button>
        </form>
        <div className="flex justify-center space-x-4 mt-6">
          <button className="bg-white p-2 rounded-full shadow-md">
            <FaApple className="text-black" />
          </button>
          <button className="bg-white p-2 rounded-full shadow-md">
            <FaFacebook className="text-blue-600" />
          </button>
          <button className="bg-white p-2 rounded-full shadow-md">
            <FaGoogle className="text-red-600" />
          </button>
        </div>
        <p className="text-center text-white mt-6">
          If you have an account? <a href="#" className="text-green-500">Sign In here</a>
        </p>
      </div>
    </div>
  );
}

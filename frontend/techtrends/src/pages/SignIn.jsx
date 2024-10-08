import React from 'react';
import BackgroundImg from '../assets/images/background.svg';

const SignIn = () => {
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${BackgroundImg})` }}
    >
      <div className="bg-green-900 bg-opacity-0 text-white text-center p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h1 className="text-3xl font-bold mb-2">TechTrends</h1>
        <p className="mb-6">It's modular and designed to last</p>
        <form className="space-y-4">
          <div className="relative">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded-lg bg-white text-black focus:outline-none"
            />
            <i className="fas fa-envelope absolute left-3 top-3 text-gray-400"></i>
          </div>
          <div className="relative">
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 rounded-lg bg-white text-black focus:outline-none"
            />
            <i className="fas fa-lock absolute left-3 top-3 text-gray-400"></i>
          </div>
          <div className="text-right">
            <a href="#" className="text-white">Forgot Password</a>
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white p-3 rounded-lg font-bold"
          >
            Sign In
          </button>
        </form>
        <p className="mt-6">
          Didn't have any account? <a href="#" className="text-green-300">Sign Up here</a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;

import React, { useState, useEffect } from 'react';
import BackgroundImg from '../assets/images/background.svg';
import { useDispatch, useSelector } from 'react-redux';
import { loginuser } from '../actions/userAction';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  
  const dispatch = useDispatch();
  const loginState = useSelector((state) => state.loginUserReducer);
  const { loading, error, success } = loginState;
  
  const navigate = useNavigate(); // Initialize the navigate hook

  useEffect(() => {
    if (localStorage.getItem('currentUser')) {
      navigate("/home"); // Redirect to home if already logged in
    }
  }, [navigate]);

  useEffect(() => {
    if (success) {
      setModalMessage('Login Successful!');
      setShowModal(true);
      setTimeout(() => {
        setShowModal(false);
        navigate("/home"); // Redirect to home on successful login
      }, 2000); // Hide modal after 2 seconds
    }

    if (error) {
      setModalMessage('Login Failed!');
      setShowModal(true);
      setTimeout(() => {
        setShowModal(false);
      }, 2000); // Hide modal after 2 seconds
    }
  }, [success, error, navigate]);

  const loginHandler = (e) => {
    e.preventDefault(); // Prevent form from refreshing the page
    const user = { email, password };
    dispatch(loginuser(user));
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${BackgroundImg})` }}
    >
      <div className="bg-green-900 bg-opacity-0 text-white text-center p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h1 className="text-3xl font-bold mb-2">TechTrends</h1>
        <p className="mb-6">It's modular and designed to last</p>
        <form className="space-y-4" onSubmit={loginHandler}>
          <div className="relative flex items-center">
            <i className="fas fa-envelope absolute left-3 text-gray-400"></i>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 pl-10 rounded-lg bg-white text-black focus:outline-none"
            />
          </div>
          <div className="relative flex items-center">
            <i className="fas fa-lock absolute left-3 text-gray-400"></i>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 pl-10 rounded-lg bg-white text-black focus:outline-none"
            />
          </div>
          <div className="text-right">
            <a href="#" className="text-white">Forgot Password</a>
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white p-3 rounded-lg font-bold"
          >
            Login
          </button>
        </form>
        <p className="mt-6">
          Didn't have any account? <a href="/signup" className="text-green-300">Sign Up here</a>
        </p>
      </div>

      {/* Modal for login success or failure */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold text-green-600">{modalMessage}</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignIn;

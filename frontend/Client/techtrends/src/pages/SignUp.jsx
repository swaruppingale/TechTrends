import React, { useState, useEffect } from 'react';
import { FaApple, FaFacebook, FaGoogle } from 'react-icons/fa';
import BackgroundImg from '../assets/images/background.svg';
import { useSelector, useDispatch } from 'react-redux';
import { registeruser } from '../actions/userAction'; 
import { useNavigate } from 'react-router-dom'; // for redirecting

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });
  
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const [isRegistered, setIsRegistered] = useState(false); // for modal
  const [countdown, setCountdown] = useState(3); // for timer
  const navigate = useNavigate();

  // Validation functions
  const validateName = (name) => {
    if (!name) {
      return 'Name is required';
    }
    return '';
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      return 'Email is required';
    } else if (!emailRegex.test(email)) {
      return 'Invalid email format';
    }
    return '';
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^\d{10}$/;
    if (!phone) {
      return 'Phone number is required';
    } else if (!phoneRegex.test(phone)) {
      return 'Phone number must be 10 digits';
    }
    return '';
  };

  const validatePassword = (password) => {
    if (!password) {
      return 'Password is required';
    } else if (password.length < 6) {
      return 'Password must be at least 6 characters';
    }
    return '';
  };

  const validateConfirmPassword = (password, confirmPassword) => {
    if (!confirmPassword) {
      return 'Confirm Password is required';
    } else if (password !== confirmPassword) {
      return 'Passwords do not match';
    }
    return '';
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate fields
    const nameError = validateName(formData.name);
    const emailError = validateEmail(formData.email);
    const phoneError = validatePhone(formData.phone);
    const passwordError = validatePassword(formData.password);
    const confirmPasswordError = validateConfirmPassword(formData.password, formData.confirmPassword);

    if (nameError || emailError || phoneError || passwordError || confirmPasswordError) {
      setErrors({
        name: nameError,
        email: emailError,
        phone: phoneError,
        password: passwordError,
        confirmPassword: confirmPasswordError,
      });
    } else {
      const finalData = {
        name: formData.name,
        email: formData.email,
        phonenumber: formData.phone, // Match with backend
        password: formData.password,
      };
      setErrors({});
      dispatch(registeruser(finalData));

      // Show modal and start countdown after successful registration
      setIsRegistered(true);
      setCountdown(3); // Reset countdown to 3
    }
  };

  // Countdown effect for redirecting
  useEffect(() => {
    if (isRegistered && countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (countdown === 0) {
      navigate('/'); // Redirect to login page after 3 seconds
    }
  }, [countdown, isRegistered, navigate]);

  // Handle input change
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${BackgroundImg})` }}
    >
      <div className="bg-white bg-opacity-0 p-8 rounded-lg shadow-lg w-80">
        <h1 className="text-2xl font-bold text-center text-white mb-2">TechTrends</h1>
        <p className="text-center text-white mb-6">It's modular and designed to last</p>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Name field */}
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>
          {/* Email field */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
          {/* Phone number field */}
          <div>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
          </div>
          {/* Password field */}
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          </div>
          {/* Confirm password field */}
          <div>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
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
          If you have an account? <a href="/" className="text-green-500">Sign In here</a>
        </p>
      </div>

      {/* Modal for registration success */}
      {isRegistered && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Registration Successful</h2>
            <p>Redirecting to login page in {countdown}...</p>
          </div>
        </div>
      )}
    </div>
  );
}

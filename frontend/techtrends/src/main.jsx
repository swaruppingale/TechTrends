import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import SignIn from './pages/SignIn.jsx'
import Home from './pages/Home.jsx'
import Homef from './pages/Homef.jsx'
import SignUp from './pages/SignUp.jsx'
<<<<<<< HEAD
import Review from './pages/review.jsx'
import Cart from './pages/cart.jsx'
import Profile from './pages/profile.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    
  <Home/>
=======
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SignUp />
>>>>>>> 6f67c1f27d06affb00dca7d0a6564f6417170f0e
  </StrictMode>,
)

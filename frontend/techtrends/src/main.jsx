import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import SignIn from './pages/SignIn.jsx'
import Home from './pages/Home.jsx'
import SignUp from './pages/SignUp.jsx'
import Review from './pages/review.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <Review/>
  </StrictMode>,
)

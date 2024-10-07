import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import SignIn from './pages/SignIn.jsx'
import Home from './pages/Home.jsx'
import Homef from './pages/Homef.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)

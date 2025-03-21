import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import WireFrame from './pages/WireFrame.jsx'
import { Navbar } from './components/Navbar.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/rotate" element={<WireFrame/>}/>
      </Routes>
    </StrictMode>
  </BrowserRouter>
)

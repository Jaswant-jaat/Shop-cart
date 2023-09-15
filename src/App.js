import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/home/Home'
import Gadgets from './components/Gadgets/Gadgets'
import Electronics from './components/Electronics/Electronics'
import Fashion from './components/Fashion/Fashion'
import Cart from './components/Cart/Cart'

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/gadgets' element={<Gadgets />} />
      <Route path='/electronics' element={<Electronics />} />
      <Route path='/fashion' element={<Fashion />} />
      <Route path='/cart' element={<Cart />} />
    </Routes>
    </BrowserRouter>
  )
}

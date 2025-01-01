import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DiamondLoginPage from './component/auth/login'
import Home from './component/home/Home'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/auth/login" element={<DiamondLoginPage />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </>
  )
}

export default App
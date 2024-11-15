import React from 'react'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Navbar from './Components/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Users from './Components/Users'
import Footer from './Components/Footer'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/users' element={<Users />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  )
}

export default App
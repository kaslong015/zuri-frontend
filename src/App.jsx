import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import tasklogo from '/src/log.png';
import Home from './Home'
import Contact from './Contact'
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>


  )
}

export default App

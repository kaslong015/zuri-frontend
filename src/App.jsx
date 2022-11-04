import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import tasklogo from '/src/log.png';
import Home from './Home'
import Contact from './Contact'
import Profile from './components/Profile';
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Profile />} />
        <Route exact path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>


  )
}

export default App

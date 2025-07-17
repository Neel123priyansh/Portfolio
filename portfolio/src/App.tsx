import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './Home/home'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/'element={<Home/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

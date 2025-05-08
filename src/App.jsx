import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './reset.css'
import HomePage from './page/Homepage/HomePage'

function App() {


  return (
    <>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<HomePage />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

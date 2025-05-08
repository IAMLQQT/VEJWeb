import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import './reset.css'
import HomePage from './page/Homepage/HomePage'
import AboutPage from './page/AboutPage/Aboutpage';
import SurveyPage from './page/SurveyPage/SurveyPage';
function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}>
            <Route path="/about" element={<AboutPage />} />
            <Route path="/survey" element={<SurveyPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

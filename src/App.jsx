import React from 'react'
import HomePage from './components/HomePage'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import About from './About';
import './App.css'
import States from './components/States';
import Delhi from './components/StateInfo/Delhi/Delhi';
import Footer from './components/Footer';
import Agra from './components/StateInfo/UP/Agra';
import TajMahal from './components/StateInfo/UP/TajMahal';
import SunTemple from './components/StateInfo/Odisha/SunTemple';
import Kaziranga from './components/StateInfo/Assam/Kaziranga';
import Khajuraho from './components/StateInfo/MP/Khajuraho';
import Features from './components/Features';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='' element={<HomePage />} />
          <Route path='/states' element={<States />} />
          <Route path='/about' element={<About />} />
          <Route path='/features' element={<Features />} />
          <Route path='/delhi' element={<Delhi />} />
          <Route path='/agra' element={<Agra />} />
          <Route path='/tajmahal' element={<TajMahal />} />
          <Route path='/suntemple' element={<SunTemple />} />
          <Route path='/khajuraho' element={<Khajuraho />} />
          <Route path='/kaziranga' element={<Kaziranga />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App

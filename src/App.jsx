import { useState } from 'react';
import Home from './components/home/Home.jsx';
import Navbar from './components/Navbar/navbar.jsx';
import Educativo from './components/Educativo/Educativo.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/educativo'} element={<Educativo />} />
        </Routes>
      </BrowserRouter>
    </>
  )
};

export default App

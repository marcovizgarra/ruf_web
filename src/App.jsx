import { useState } from 'react';
import Home from './components/home/Home.jsx';
import Navbar from './components/Navbar/navbar.jsx';
import Educativo from './components/Educativo/Educativo.jsx';

function App() {
  return (
    <>
      <Home />
      <Navbar />
      <Educativo />
    </>
  )
};

export default App

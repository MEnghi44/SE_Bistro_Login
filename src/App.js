import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Navbar2 from './components/Navbar/Navbar2';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Profile from './pages/Profile';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Navbar2 />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>

      
    </BrowserRouter>
  );
};

export default App;

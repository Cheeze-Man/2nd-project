import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Nav from './components/Nav';
import Positions from './pages/Positions/Positions';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/nav" element={<Nav />} />
        <Route path="/positions" element={<Positions />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

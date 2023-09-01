import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Main from './pages/Main/Main';
import MyJumpit from './pages/MyJumpit/MyJumpit';
import Resumes from './pages/Resumes/Resumes';
import ResumeDetail from './pages/Resumes/ResumeDetail';
import NotFound from './components/NotFound';
import Footer from './components/Footer/Footer';
import Positions from './pages/Positions/Positions';
import PositionsDetail from './pages/Positions/PositionsDetail';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/myjumpit" element={<MyJumpit />} />
        <Route path="/resumes" element={<Resumes />} />
        <Route path="/resume/new" element={<ResumeDetail />} />
        <Route path="/resume/:resumeId" element={<ResumeDetail />} />
        <Route path="/positions" element={<Positions />} />
        <Route path="/positions/:id" element={<PositionsDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;

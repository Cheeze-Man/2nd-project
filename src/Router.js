import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Main from './pages/Main/Main';
import Resumes from './pages/Resumes/Resumes';
import ResumeDetail from './pages/Resumes/ResumeDetail';

const Layout = ({ children }) => {
  return (
    <div>
      <Nav />
      {children}
      <Footer />
    </div>
  );
};

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Main />
            </Layout>
          }
        />
        <Route
          path="*"
          element={
            <Layout>
              <NotFound />
            </Layout>
          }
        />
        <Route
          path="/resumes"
          element={
            <Layout>
              <Resumes />
            </Layout>
          }
        />
        <Route
          path="/resumes/new"
          element={
            <Layout>
              <ResumeDetail />
            </Layout>
          }
        />
        <Route
          path="/resume/:resumeId"
          element={
            <Layout>
              <ResumeDetail />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

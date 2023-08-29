import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import MyJumpit from './pages/MyJumpit/MyJumpit';
import Main from './pages/Main/Main';
import Resumes from './pages/Resumes/Resumes';
import ResumeDetail from './pages/Resumes/ResumeDetail';

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
    </>
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
              <Footer />
            </Layout>
          }
        />
        <Route
          path="*"
          element={
            <Layout>
              <NotFound />
              <Footer />
            </Layout>
          }
        />
        <Route
          path="/myjumpit"
          element={
            <Layout>
              <MyJumpit />
              <Footer />
            </Layout>
          }
        />
        <Route
          path="/resumes"
          element={
            <Layout>
              <Resumes />
              <Footer />
            </Layout>
          }
        />
        <Route
          path="/resume/new"
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

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Nav from './components/Nav';
import Positions from './pages/Positions/Positions';
import PositionsDetail from './pages/Positions/PositionsDetail';

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
            </Layout>
          }
        />
        <Route
          path="/positions"
          element={
            <Layout>
              <Positions />
            </Layout>
          }
        />
        <Route
          path="/positions/:id"
          element={
            <Layout>
              <PositionsDetail />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

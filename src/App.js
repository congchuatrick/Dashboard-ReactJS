import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Products from './pages/Products';
import { FooterContainer } from './containers/footer'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </Router>
      <FooterContainer />
    </>
  );
}

export default App;
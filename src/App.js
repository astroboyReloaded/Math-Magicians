import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Calculator from './components/Calculator';
import Quote from './components/Quote';
import './index.css';

const App = () => (
  <Routes>
    <Route path="/" element={<Navbar />}>
      <Route index element={<Home />} />
      <Route path="quote" element={<Quote />} />
      <Route path="calc" element={<Calculator />} />
      <Route path="*" element={<h1>Page not found!</h1>} />
    </Route>
  </Routes>
);
export default App;

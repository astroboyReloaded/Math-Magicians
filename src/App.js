import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Quote from './components/Quote';
import './App.css';

const App = () => (
  <Routes>
    <Route path="/" element={<h1>Home</h1>} />
    <Route path="quote" element={<Quote />} />
    <Route path="calc" element={<Calculator />} />
  </Routes>
);
export default App;

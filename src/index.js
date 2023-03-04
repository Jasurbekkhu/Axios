import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SinglePages from './pages/singlePages/SinglePages';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/users/:id' element={<SinglePages/>}/>
        <Route path='*' element={<h1>bunday sahifa yoq!</h1>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

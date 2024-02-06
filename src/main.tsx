import React from 'react';
import ReactDOM from 'react-dom/client';
import Headder from './components/Headder/Headder.tsx';
import Home from './components/Home/Home.tsx';
import { About } from './components/About/About.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Headder />
    <Home />
    <About />
  </React.StrictMode>,
)

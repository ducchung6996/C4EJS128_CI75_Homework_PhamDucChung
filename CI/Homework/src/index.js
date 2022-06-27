import React from 'react';
import ReactDOM from 'react-dom/client';
import Hw1 from './components/HW1/Hw1';
import Hw2 from './components/HW2/Hw2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Hw1 />
    <Hw2 />
  </React.StrictMode>
);


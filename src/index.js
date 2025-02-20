import React from 'react';
import ReactDOM from 'react-dom/client'; // <- Importação correta para React 18
import { App } from './App';
import reportWebVitals from './reportWebVitals';

// Criando a root para renderizar o App
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();

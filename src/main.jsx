import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/styles.scss';
import { App } from './App';
import { MoviesProvider } from './context/MoviesContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <MoviesProvider>
    <App />
  </MoviesProvider>,
);

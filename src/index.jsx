import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { UserProvider } from './context/UserContext';
import { BrowserRouter as Router } from 'react-router-dom';
import { FencingProvider } from './context/FencingContext';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Router>
      <UserProvider>
        <FencingProvider>
          <App />
        </FencingProvider>
      </UserProvider>
    </Router>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

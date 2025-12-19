import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import { AuthProvider } from './context/AuthContext'; // Import AuthProvider
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   // Wrap the App component in the Router and AuthProvider
   <Router>
      <AuthProvider>
         <App />
      </AuthProvider>
   </Router>
);

reportWebVitals();

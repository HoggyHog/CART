import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//and this is the code from the codebase website to get our firebase integrated

import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyDeJ4lbSFGKEHRgMsvyTjn3RGDnsS6JD70",
  authDomain: "cart-app-fca2a.firebaseapp.com",
  projectId: "cart-app-fca2a",
  storageBucket: "cart-app-fca2a.appspot.com",
  messagingSenderId: "234435207195",
  appId: "1:234435207195:web:8dce9e18999b3b099218be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



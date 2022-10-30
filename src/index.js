import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBy0GcKMeyKyEKJGheQ7Py6kqc_k33oe04",
  authDomain: "reactjs-tollan-gabriel.firebaseapp.com",
  projectId: "reactjs-tollan-gabriel",
  storageBucket: "reactjs-tollan-gabriel.appspot.com",
  messagingSenderId: "388083794065",
  appId: "1:388083794065:web:948b111e82c5876bfa3f30",
  measurementId: "G-Q41WWQ6EFB"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

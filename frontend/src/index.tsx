import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDX_oIhrxIS241uzCv7AwTtYdx1miKlPMc',
  authDomain: 'waynehack.firebaseapp.com',
  projectId: 'waynehack',
  storageBucket: 'waynehack.appspot.com',
  messagingSenderId: '852097833149',
  appId: '1:852097833149:web:7f58adc692214a73e43fd4',
  measurementId: 'G-3VBBLDZFF3'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

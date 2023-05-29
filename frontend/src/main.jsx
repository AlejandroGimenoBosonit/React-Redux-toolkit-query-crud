import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// redux toolkit query
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { apiSlice } from './api/appSlice.js';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApiProvider api={apiSlice}>
      <App />
    </ApiProvider>
  </React.StrictMode>,
)

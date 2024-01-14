/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Routes, Route, createBrowserRouter, RouterProvider } from "react-router-dom";
import { HashRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path:"/Crosx/",
    element:<App/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <HashRouter>
    <App />
    </HashRouter>  
    {/* <RouterProvider router={router}/> */}
  </React.StrictMode>,
)

/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Routes, Route, createBrowserRouter, RouterProvider } from "react-router-dom";
import { HashRouter } from 'react-router-dom';
import Shop from './pages/Shop.jsx';
import Home from './pages/Home';
import Canvas from './canvas';
import Customizer from './pages/Customizer';

const router = createBrowserRouter([
  {
    path:"/Crosx/",
    element:<App/>,
    children:[{
      path:"/Crosx/shop",
      element:<Shop/>
    },
    {
      path:"/Crosx/customizer",
      element:[<Home/>,<Customizer/>,<Canvas/>]
    }]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   {/* <HashRouter>
    <App />
    </HashRouter>   */}
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

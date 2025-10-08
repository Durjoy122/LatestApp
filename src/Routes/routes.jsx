import React from 'react';
import Root from '../Pages/root.jsx';
import ErrorPage from '../Pages/ErrorPage/ErrorPage.jsx';
import Home from '../Pages/Home/Home.jsx';
import Apps from '../Pages/Apps/Apps.jsx';
import Installation from '../Pages/Installation/Installation.jsx';


import { 
   createBrowserRouter,
 } from "react-router-dom";


export const router = createBrowserRouter([
  {
      path: "/",
      Component: Root,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
           index: true,
           loader: () => fetch("/localApp.json").then(res => res.json()),
           path:"/",
           Component: Home
        },
        {
            path:"/apps",
            loader: () => fetch("/localApp.json").then(res => res.json()),
            Component: Apps
        },
        {
            path:"/install",
            Component: Installation
        }
     ]
  },
]);
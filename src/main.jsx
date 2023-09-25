import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './components/Header/Header';
import Root from './components/root/root';
import Donation from './components/Donation/Donation';
import Statistics from './components/Statistics/Statistics';

const router = createBrowserRouter([

  {
    path: "/",
    element: <Root></Root> ,
    children: [
      {
        path: '/Header',
        element:<Header></Header>
      },
      {
        path: '/Donation',
        element:<Donation></Donation>
      },
      {
        path: '/Statistics',
        element: <Statistics></Statistics>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

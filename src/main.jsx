import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/root/root';
import Donation from './components/Donation/Donation';
import Statistics from './components/Statistics/Statistics';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import DonationDetails from './components/DonationDetails/DonationDetails';

const router = createBrowserRouter([

  {
    path: "/",
    element: <Root></Root> ,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element:<Home></Home>
      },
      {
        path: '/Donation',
        element:<Donation></Donation>,
        loader: ()=> fetch('donation.json')
      },
      {
        path: '/Statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/DonationCard/:id',
        element: <DonationDetails></DonationDetails>,
        loader: ()=> fetch('donation.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

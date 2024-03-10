import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SignIn from './routes/SignIn';
import SignUp from './routes/SignUp';
import Dashboard from './routes/Dashboard';
import OnHold from './routes/OnHold';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import NotFound from './routes/NotFound';

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />
  },
  {
    path: "/dashboard",
    element: <Dashboard />
  },
  {

    path: "/hold",
    element: <OnHold />
    
  },
  {
    path: "*",
    element: <NotFound />

  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

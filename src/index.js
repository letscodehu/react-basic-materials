import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home';
import './index.css';
import Login from './Login.js'

 const router = createBrowserRouter([
    {
        "path": "/login",
        element: <Login />
    },
    {
        "path": "/",
        element: <Home />
    }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);


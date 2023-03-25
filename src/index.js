import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, redirect, RouterProvider } from 'react-router-dom';
import Home from './screens/Home';
import './index.css';
import Login from './screens/Login'
import Auth from './services/auth';
import Error from './screens/Error';
import Register from './screens/Register';
import Dashboard from './layouts/Dashboard';
import Contacts from './screens/Contact';
import Assets from './screens/Asset';

const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login />,
        loader: () => {
            if (Auth.loggedIn()) {
                return redirect("/")
            }
            return null
        }
    },
    {
        path: "/register",
        element: <Register />,
        loader: () => {
            if (Auth.loggedIn()) {
                return redirect("/")
            }
            return null
        }
    },
    {
        path: "/",
        element: <Dashboard />,
        loader: () => {
            if (!Auth.loggedIn()) {
                return redirect("/login")
            }
            return null
        },
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/contact",
                element: <Contacts />,
            },
            {
                path: "/asset",
                element: <Assets />,
            }
        ],
        errorElement: <Error />
    }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);


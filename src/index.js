import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, redirect, RouterProvider } from 'react-router-dom';
import Home from './screens/Home';
import './index.css';
import Login from './screens/Login'
import Auth from './services/auth';
import Error from './screens/Error';

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
        path: "/",
        element: <Home />,
        loader: () => {
            if (!Auth.loggedIn()) {
                return redirect("/login")
            }
            return null
        },
        errorElement: <Error/>
    }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);


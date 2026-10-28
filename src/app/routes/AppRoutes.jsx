import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import AuthLayout from '../layouts/AuthLayout'
import Login from '../../features/auth/ui/pages/Login';
import Register from '../../features/auth/ui/pages/Register';
import DashboardLayout from '../layouts/DashboardLayout';
import Home from '../../features/employee/ui/Home';
import PublicRoute from '../protectedRoutes/PublicRoute';
import ProtectedRoute from '../protectedRoutes/ProtectedRoute';
import { useDispatch } from 'react-redux';
import { currentLoggedEmployee } from '../../features/auth/state/authAction';


const AppRoutes = () => {

    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(currentLoggedEmployee())
    }, [])

    const routes = createBrowserRouter([
        {
            path: "/",
            element: <PublicRoute />,
            children: [
                {
                    path: "",
                    element: <AuthLayout />,
                    children: [
                        {
                            path: "",
                            element: <Login />
                        },
                        {
                            path: "register",
                            element: <Register />
                        }
                    ]
                }
            ]
        },
        {
            path: "/home",
            element: <ProtectedRoute />,
            children: [
                {
                    path: "",
                    element: <DashboardLayout />,
                    children: [
                        {
                            path: "",
                            element: <Home />
                        }
                    ]
                }
            ]

        }
    ])

    return <RouterProvider router={routes} />
}

export default AppRoutes
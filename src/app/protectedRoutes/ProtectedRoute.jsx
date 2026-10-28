import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router';
import { store } from '../store';

const ProtectedRoute = () => {

    let { employee, isLoading } = useSelector((store) => store.auth)

    if (isLoading) return <h1>Loading.....</h1>

    if (!employee) {
        return <Navigate to="/" />
    }
    return <Outlet />
}

export default ProtectedRoute
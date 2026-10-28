import React from 'react'
import { Navigate, Outlet } from 'react-router';
import { useSelector } from 'react-redux';


const PublicRoute = () => {

    let { employee, isLoading } = useSelector((store) => store.auth)

    if (isLoading) return <h1>Loading.....</h1>

    if (employee) {
        return <Navigate to="/home" />
    }

    return <Outlet />
}

export default PublicRoute
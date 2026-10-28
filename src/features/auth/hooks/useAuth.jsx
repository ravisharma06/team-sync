import { useForm } from 'react-hook-form'
import React from 'react'
import { useDispatch } from 'react-redux';
import { loginEmployee } from '../state/authAction';
import { data, useNavigate } from 'react-router';
import { Link } from 'react-router'

const useAuth = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const navigate = useNavigate()
    const dispatch = useDispatch()


    const handleLogin = (data) => {
        dispatch(loginEmployee(data))
    }

    const handleRegister = (data) => {
        console.log(data)
    }



    return {
        register,
        handleSubmit,
        errors,
        handleLogin,
        handleRegister,
        navigate,
        Link
    }
}

export default useAuth
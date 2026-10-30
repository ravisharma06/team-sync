import { useEffect } from 'react'
import { Outlet } from 'react-router'
import { useSelector } from 'react-redux'

const AuthLayout = () => {
    const { mode } = useSelector((store) => store.theme)

    useEffect(() => {
        document.body.classList.toggle('light', mode === 'light')
    }, [mode])

    return (
        <div className="min-h-screen">
            <Outlet />
        </div>
    )
}

export default AuthLayout
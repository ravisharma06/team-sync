import { useEffect } from 'react'
import { Outlet } from 'react-router'
import { useSelector } from 'react-redux'
import AsideNav from '../../features/dashboard/ui/components/AsideNav';
import TopNav from '../../features/dashboard/ui/components/TopNav';
const DashboardLayout = () => {

    const { mode } = useSelector((store) => store.theme)

    useEffect(() => {
        if (mode === "light") {
            document.body.classList.add("light")
        } else {
            document.body.classList.remove("light")
        }
    }, [mode])
    return (
        <div className="flex min-h-screen">
            <div className="h-screen w-60 shrink-0">
                <AsideNav />
            </div>
            <div className="min-w-0 flex-1">
                <div className="flex flex-col">
                    <TopNav />
                </div>
                <div>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout
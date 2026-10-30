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
        <div className="flex h-dvh overflow-hidden">
            <div className="h-full w-60 shrink-0 overflow-y-auto">
                <AsideNav />
            </div>
            <div className="flex h-full min-h-0 min-w-0 flex-1 flex-col">
                <TopNav />
                <div className="min-h-0 flex-1 overflow-y-auto">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout
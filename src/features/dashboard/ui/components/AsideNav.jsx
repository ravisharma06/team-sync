import { useSelector } from 'react-redux';
import { adminNavigation, employeeNavigation } from '../../../../app/constants/navigations';
import NavigationTab from './Navigation';

const AsideNav = () => {

    const { employee } = useSelector((store) => store.auth)

    let navigations = employee?.role === "admin" ? adminNavigation : employeeNavigation
    return (
        <aside className="h-full border-r border-white/10 bg-[var(--primary)] py-6 text-center">
            <h2 className="px-4 text-2xl leading-tight font-bold tracking-tight text-[#C4B5FD]">
                team-sync
            </h2>
            <h5 className="mt-1 px-4 text-sm font-medium text-white/70">
                Explore workspace
            </h5>

            <nav aria-label="Main navigation" className="mt-10 flex flex-col gap-2 px-3">
                {navigations.map((route) => {
                    return (
                        <NavigationTab
                            key={route.path}
                            path={route.path}
                            icon={route.icon}
                            title={route.title}
                        />
                    )
                })}
            </nav>
        </aside>
    )
}

export default AsideNav
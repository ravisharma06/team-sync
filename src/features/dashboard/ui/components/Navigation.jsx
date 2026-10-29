import { NavLink } from 'react-router';

const NavigationTab = ({ path, title, icon }) => {
    return (
        <NavLink
            to={path}
            end
            className={({ isActive }) =>
                `flex min-h-11 w-full items-center gap-3 rounded-lg border-l-2 px-3 text-left text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                    isActive
                    ? 'border-[#C4B5FD] bg-white/10 text-white'
                    : 'border-transparent text-white/75 hover:bg-white/5 hover:text-white'
                }`
            }
        >
            <span className="shrink-0 text-[#C4B5FD] [&>svg]:size-5">{icon}</span>
            <span>{title}</span>
        </NavLink>
    )
}

export default NavigationTab
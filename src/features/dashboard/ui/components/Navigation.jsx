import { NavLink } from 'react-router';

const NavigationTab = ({ path, title, icon }) => {
    return (
        <NavLink
            to={path}
            end
            className={({ isActive }) =>
                `flex min-h-11 w-full items-center gap-3 rounded-lg border-l-2 px-3 text-left text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--sidebar-accent)] ${
                    isActive
                    ? 'border-[var(--sidebar-accent)] bg-[var(--sidebar-active-bg)] text-[var(--sidebar-active-text)]'
                    : 'border-transparent text-[var(--sidebar-text)] hover:bg-[var(--sidebar-hover-bg)] hover:text-[var(--sidebar-text-hover)]'
                }`
            }
        >
            <span className="shrink-0 text-[var(--sidebar-accent)] [&>svg]:size-5">{icon}</span>
            <span>{title}</span>
        </NavLink>
    )
}

export default NavigationTab
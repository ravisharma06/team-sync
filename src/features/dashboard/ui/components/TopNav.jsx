import { Bell, Menu, Moon, Search, Sun, UserRound } from 'lucide-react'
import useTheme from '../../../../shared/hooks/useTheme'

const TopNav = () => {
    const { mode, changeTheme } = useTheme()

    return (
        <header className="sticky top-0 z-30 w-full flex-none bg-[var(--bg-main)] transition-colors">
            <div className="flex h-16 items-center justify-between gap-3 px-3 sm:px-5">
                <label className="flex h-10 min-w-0 max-w-md flex-1 items-center gap-2.5 rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)] px-3 text-[var(--text-muted)] transition-colors hover:bg-[var(--bg-hover)] focus-within:border-[var(--tertiary)]">
                    <Search aria-hidden="true" size={18} className="shrink-0" />
                    <input
                        type="search"
                        aria-label="Search workspace"
                        placeholder="Search workspace..."
                        className="min-w-0 flex-1 bg-transparent text-sm text-[var(--text-primary)] outline-0"
                    />
                </label>

                <div className="flex items-center gap-1 sm:gap-2">
                    <button
                        onClick={changeTheme}
                        type="button"
                        aria-label="Theme"
                        className="relative grid size-10 place-items-center cursor-pointer rounded-lg text-[var(--text-secondary)] transition-colors hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--tertiary)]"
                    >
                        {mode === "dark" ? <Moon /> : <Sun />}
                    </button>

                    <button
                        type="button"
                        aria-label="Notifications"
                        className="relative grid size-10 place-items-center rounded-lg text-[var(--text-secondary)] transition-colors hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--tertiary)]"
                    >
                        <Bell aria-hidden="true" size={20} />
                        <span className="absolute right-2.5 top-2.5 size-2 rounded-full bg-[var(--danger)] ring-2 ring-[var(--bg-main)]" />
                    </button>


                    <button
                        type="button"
                        aria-label="Menu"
                        className="grid size-10 place-items-center rounded-lg text-[var(--text-secondary)] transition-colors hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--tertiary)]"
                    >
                        <Menu aria-hidden="true" size={20} />
                    </button>

                    <button
                        type="button"
                        aria-label="Profile"
                        className="ml-1 grid size-9 place-items-center rounded-full bg-[var(--bg-hover)] text-[var(--tertiary)] transition-colors hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--tertiary)]"
                    >
                        <UserRound aria-hidden="true" size={18} />
                    </button>
                </div>
            </div>
        </header>
    )
}

export default TopNav
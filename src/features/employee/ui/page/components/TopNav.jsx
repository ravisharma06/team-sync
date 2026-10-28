import { Bell, Menu, Search, UserRound } from 'lucide-react'

const TopNav = () => {
    return (
        <header className="sticky top-0 z-30 w-full   transition-colors">
            <div className="flex h-16 items-center justify-between gap-3 px-3 sm:px-5">
                <label className="flex h-10 min-w-0 max-w-md flex-1 items-center gap-2.5 rounded-lg border border-transparent bg-[var(--bg-surface)] px-3 text-[var(--text-muted)] transition">
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
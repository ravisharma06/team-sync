
const EmployeeToolbar = ({ departments = [], filters, setFilters }) => {
    return (
        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="relative sm:col-span-1">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]">
                    ⌕
                </span>
                <input
                    value={filters.search}
                    onChange={(e) => setFilters((current) => ({ ...current, search: e.target.value }))}
                    type="text"
                    placeholder="Search by name or email..."
                    className="w-full rounded-lg border border-[var(--border-color)] bg-[var(--bg-main)] py-2.5 pl-9 pr-4 text-sm text-[var(--text-primary)] outline-none transition placeholder:text-[var(--text-muted)] focus:border-[var(--border-color)]"
                />
            </div>

            <select
                onChange={(e) => setFilters((current) => ({ ...current, department: e.target.value }))}
                value={filters.department}
                className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-main)] px-3 py-2.5 text-sm text-[var(--text-secondary)] outline-none focus:border-[var(--border-color)]">


                <option value="all">All Departments</option>
                {departments.map((department) => (
                    <option key={department} value={department}>
                        {department}
                    </option>
                ))}
            </select>

            <select
                value={filters.status}
                onChange={(e) => setFilters((current) => ({ ...current, status: e.target.value }))}
                className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-main)] px-3 py-2.5 text-sm text-[var(--text-secondary)] outline-none focus:border-[var(--border-color)]">
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
            </select>
        </div>
    );
};

export default EmployeeToolbar;

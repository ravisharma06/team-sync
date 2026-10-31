const EmployeeStats = ({ employees, total }) => {
    const activeEmployees = employees.filter(
        (employee) => employee.status === "active"
    ).length;
    const inactiveEmployees = employees.filter(
        (employee) => employee.status !== "active"
    ).length;
    const departments = new Set(
        employees.map((employee) => employee.department)
    ).size;

    const stats = [
        {
            title: "Total Employees",
            value: total,
            icon: "👥",
            color: "text-[var(--tertiary)]",
            description: "Across your organization"
        },
        {
            title: "Active Employees",
            value: activeEmployees,
            icon: "✓",
            color: "text-[var(--success)]",
            description: "On current page"
        },
        {
            title: "Inactive Employees",
            value: inactiveEmployees,
            icon: "○",
            color: "text-[var(--warning)]",
            description: "On current page"
        },
        {
            title: "Departments",
            value: departments,
            icon: "🏢",
            color: "text-[var(--tertiary)]",
            description: "On current page"
        }
    ];

    return (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => (
                <div
                    key={stat.title}
                    className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-surface)] p-5 shadow-[var(--shadow-md)] transition-shadow hover:bg-[var(--bg-hover)]"
                >
                    <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-[var(--text-muted)]">
                            {stat.title}
                        </p>
                        <div className={`flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--bg-hover)] text-lg font-semibold ${stat.color}`}>
                            {stat.icon}
                        </div>
                    </div>
                    <h2 className="mt-4 text-3xl font-bold text-[var(--text-primary)]">
                        {stat.value}
                    </h2>
                    <p className="mt-2 text-xs text-[var(--text-muted)]">
                        {stat.description}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default EmployeeStats;

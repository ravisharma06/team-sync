
const EmployeeStats = ({ employees, total }) => {

    const activeEmployees = employees.filter(
        emp => emp.status === "active"
    ).length;

    const inactiveEmployees = employees.filter(
        emp => emp.status === "inactive"
    ).length;

    const departments = new Set(
        employees.map(emp => emp.department)
    ).size;

    const stats = [
        {
            title: "Total Employees",
            value: total,
            icon: "👥"
        },
        {
            title: "Active Employees",
            value: activeEmployees,
            icon: "🟢"
        },
        {
            title: "Inactive Employees",
            value: inactiveEmployees,
            icon: "⚪"
        },
        {
            title: "Departments",
            value: departments,
            icon: "🏢"
        }
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">

            {stats.map((stat) => (
                <div
                    key={stat.title}
                    className="bg-white border rounded-xl p-5 shadow-sm"
                >
                    <div className="flex justify-between">
                        <p className="text-gray-500 text-sm">
                            {stat.title}
                        </p>

                        <span>{stat.icon}</span>
                    </div>

                    <h2 className="text-2xl font-bold mt-3">
                        {stat.value}
                    </h2>
                </div>
            ))}

        </div>
    );
};

export default EmployeeStats;

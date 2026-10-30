
import { useState } from "react";
import { Link } from "react-router";
import { Plus } from "lucide-react";
import { MoreVertical } from "lucide-react";
import { useEmployee } from "../../hooks/useEmployees";

const Employee = () => {

    const { data, isPending, isError, error } = useEmployee();
    const [statusOverrides, setStatusOverrides] = useState({});

    if (isPending) {
        return (
            <div className="flex h-full min-h-0 items-center justify-center bg-[var(--bg-main)]">
                <p className="animate-pulse text-[var(--text-muted)]">
                    Loading employees...
                </p>
            </div>
        );
    }

    if (isError) {
        return (
            <div className="h-full bg-[var(--bg-main)] p-8 text-center text-[var(--danger)]">
                {error.message}
            </div>
        );
    }

    const employees = (data?.employees || []).map((employee) => ({
        ...employee,
        status: statusOverrides[employee._id] ?? employee.status
    }));

    // Statistics
    const activeEmployees = employees.filter(
        emp => emp.status === "active"
    ).length;

    const inactiveEmployees = employees.filter(
        emp => emp.status !== "active"
    ).length;

    const departments = [
        ...new Set(employees.map(emp => emp.department))
    ];

    // Employee initials
    const getInitials = (name = "") => {
        return name
            .split(" ")
            .filter(Boolean)
            .slice(0, 2)
            .map(word => word[0])
            .join("")
            .toUpperCase();
    };

    // Format date
    const formatDate = (date) => {
        if (!date) return "N/A";

        return new Date(date).toLocaleDateString("en-IN", {
            day: "numeric",
            month: "short",
            year: "numeric"
        });
    };

    // Statistics cards
    const stats = [
        {
            title: "Total Employees",
            value: data?.pagination?.total ?? employees.length,
            icon: "👥",
            color: "bg-[var(--bg-hover)] text-[var(--tertiary)]",
            description: "Across your organization"
        },
        {
            title: "Active Employees",
            value: activeEmployees,
            icon: "✓",
            color: "bg-[var(--bg-hover)] text-[var(--success)]",
            description: "On current page"
        },
        {
            title: "Inactive Employees",
            value: inactiveEmployees,
            icon: "○",
            color: "bg-[var(--bg-hover)] text-[var(--warning)]",
            description: "On current page"
        },
        {
            title: "Departments",
            value: departments.length,
            icon: "🏢",
            color: "bg-[var(--bg-hover)] text-[var(--tertiary)]",
            description: "On current page"
        }
    ];

    return (

        <div className="min-h-full bg-[var(--bg-main)] p-4 text-[var(--text-primary)] transition-colors sm:p-6 lg:p-8">

            <div className="mx-auto w-full max-w-7xl space-y-7">

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <h1 className="text-2xl font-bold text-[var(--text-primary)]">
                        Employees
                    </h1>
                    <Link
                        to="/home/add-employee"
                        className="inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--auth-accent)] px-4 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--auth-accent)]"
                    >
                        <Plus aria-hidden="true" size={18} />
                        Add Employee
                    </Link>
                </div>

                {/* Statistics Cards */}

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

                                <div className={`flex h-10 w-10 items-center justify-center rounded-lg text-lg font-semibold ${stat.color}`}>
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


                {/* Employee Listing */}

                <div className="overflow-hidden rounded-xl border border-[var(--border-color)] bg-[var(--bg-surface)] shadow-[var(--shadow-md)]">

                    {/* Table Header */}

                    <div className="border-b border-[var(--border-color)] p-5 sm:p-6">

                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

                            <div>
                                <h2 className="text-lg font-semibold text-[var(--text-primary)]">
                                    All Employees
                                </h2>

                                <p className="mt-1 text-sm text-[var(--text-muted)]">
                                    View and manage your organization's employees.
                                </p>
                            </div>

                        </div>


                        {/* Search and Filters */}

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-5">

                            {/* Search */}

                            <div className="relative sm:col-span-1">

                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]">
                                    ⌕
                                </span>

                                <input
                                    type="text"
                                    placeholder="Search by name or email..."
                                    className="w-full rounded-lg border border-[var(--border-color)] bg-[var(--bg-main)] py-2.5 pl-9 pr-4 text-sm text-[var(--text-primary)] outline-none transition placeholder:text-[var(--text-muted)] focus:border-[var(--border-color)]"
                                />

                            </div>


                            {/* Department Filter */}

                            <select
                                className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-main)] px-3 py-2.5 text-sm text-[var(--text-secondary)] outline-none focus:border-[var(--border-color)]"
                            >

                                <option value="all">All Departments</option>

                                {departments.map((dept) => (
                                    <option key={dept} value={dept}>
                                        {dept}
                                    </option>
                                ))}

                            </select>


                            {/* Status Filter */}

                            <select
                                className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-main)] px-3 py-2.5 text-sm text-[var(--text-secondary)] outline-none focus:border-[var(--border-color)]"
                            >

                                <option value="all">All Status</option>
                                <option value="active">Active</option>
                                <option value="inactive">Inactive</option>

                            </select>

                        </div>

                    </div>


                    {/* Employee Table */}

                    <div className="overflow-x-auto">

                        <table className="w-full text-left whitespace-nowrap">

                            <thead className="sticky top-0 border-b border-[var(--border-color)] bg-[var(--bg-main)]">

                                <tr className="text-xs uppercase tracking-wider text-[var(--text-muted)]">

                                    <th className="px-6 py-4 font-semibold">
                                        Employee
                                    </th>

                                    <th className="px-6 py-4 font-semibold">
                                        Department
                                    </th>

                                    <th className="px-6 py-4 font-semibold">
                                        Role
                                    </th>

                                    <th className="px-6 py-4 font-semibold">
                                        Status
                                    </th>

                                    <th className="px-6 py-4 font-semibold">
                                        Joining Date
                                    </th>

                                    <th className="px-6 py-4 text-center font-semibold">
                                        Actions
                                    </th>

                                </tr>

                            </thead>


                            <tbody className="divide-y divide-[var(--border-color)]">

                                {employees.length > 0 ? (

                                    employees.map((employee) => (

                                        <tr
                                            key={employee._id}
                                            className="transition-colors hover:bg-[var(--bg-hover)]"
                                        >

                                            {/* Employee Information */}

                                            <td className="px-6 py-4">

                                                <div className="flex items-center gap-3">

                                                    {employee.avatar ? (

                                                        <img
                                                            src={employee.avatar}
                                                            alt={employee.name}
                                                            className="w-10 h-10 rounded-full object-cover"
                                                        />

                                                    ) : (

                                                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--bg-hover)] text-sm font-semibold text-[var(--tertiary)]">
                                                            {getInitials(employee.name)}
                                                        </div>

                                                    )}

                                                    <div>

                                                        <p className="text-sm font-semibold text-[var(--text-primary)]">
                                                            {employee.name}
                                                        </p>

                                                        <p className="mt-1 text-xs text-[var(--text-muted)]">
                                                            {employee.email}
                                                        </p>

                                                    </div>

                                                </div>

                                            </td>


                                            {/* Department */}

                                            <td className="px-6 py-4">

                                                <span className="rounded-md bg-[var(--bg-hover)] px-3 py-1.5 text-xs font-medium capitalize text-[var(--text-secondary)]">
                                                    {employee.department || "N/A"}
                                                </span>

                                            </td>


                                            {/* Role */}

                                            <td className="px-6 py-4">

                                                <span className="text-sm capitalize text-[var(--text-secondary)]">
                                                    {employee.role}
                                                </span>

                                            </td>


                                            {/* Status */}

                                            <td className="px-6 py-4">

                                                <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium ${
                                                    employee.status === "active"
                                                        ? "border border-[var(--border-color)] text-[var(--success)]"
                                                        : "border border-[var(--border-color)] text-[var(--danger)]"
                                                }`}>

                                                    <span className={`w-1.5 h-1.5 rounded-full ${
                                                        employee.status === "active"
                                                            ? "bg-[var(--success)]"
                                                            : "bg-[var(--danger)]"
                                                    }`}></span>

                                                    {employee.status || "Unknown"}

                                                </span>

                                            </td>


                                            {/* Joining Date */}

                                            <td className="px-6 py-4 text-sm text-[var(--text-muted)]">
                                                {formatDate(employee.createdAt)}
                                            </td>

                                            <td className="px-6 py-4 text-center">
                                                <details className="relative inline-block text-left">
                                                    <summary
                                                        aria-label={`Actions for ${employee.name}`}
                                                        className="grid size-9 cursor-pointer list-none place-items-center rounded-lg text-[var(--text-secondary)] transition-colors hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--tertiary)] [&::-webkit-details-marker]:hidden"
                                                    >
                                                        <MoreVertical aria-hidden="true" size={20} />
                                                    </summary>
                                                    <div className="absolute right-0 z-10 mt-1 min-w-40 rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)] p-1 shadow-[var(--shadow-md)]">
                                                        <button
                                                            type="button"
                                                            role="menuitem"
                                                            onClick={(event) => {
                                                                setStatusOverrides((currentOverrides) => ({
                                                                    ...currentOverrides,
                                                                    [employee._id]: employee.status === "active" ? "inactive" : "active"
                                                                }));
                                                                event.currentTarget.closest("details").open = false;
                                                            }}
                                                            className={`w-full rounded-md px-3 py-2 text-left text-sm transition-colors hover:bg-[var(--bg-hover)] ${
                                                                employee.status === "active"
                                                                    ? "text-[var(--danger)]"
                                                                    : "text-[var(--success)]"
                                                            }`}
                                                        >
                                                            {employee.status === "active" ? "Mark as inactive" : "Mark as active"}
                                                        </button>
                                                    </div>
                                                </details>
                                            </td>

                                        </tr>

                                    ))

                                ) : (

                                    <tr>

                                        <td
                                            colSpan="6"
                                            className="px-6 py-16 text-center"
                                        >

                                            <div className="text-4xl mb-3">
                                                🔍
                                            </div>

                                            <h3 className="text-base font-semibold text-[var(--text-primary)]">
                                                No employees found
                                            </h3>

                                            <p className="mt-2 text-sm text-[var(--text-muted)]">
                                                Try changing your search or filters.
                                            </p>

                                            <button
                                                className="mt-4 text-sm font-medium text-[var(--tertiary)] hover:underline"
                                            >
                                                Clear all filters
                                            </button>

                                        </td>

                                    </tr>

                                )}

                            </tbody>

                        </table>

                    </div>


                    {/* Table Footer */}

                    <div className="flex flex-col items-center justify-between gap-3 border-t border-[var(--border-color)] px-5 py-4 sm:flex-row">

                        <p className="text-xs text-[var(--text-muted)]">
                            Page {data?.pagination?.page ?? 1} of {data?.pagination?.totalPages ?? 1}
                            {" "} · {" "}
                            {data?.pagination?.total ?? employees.length} total employees
                        </p>

                        <p className="text-xs text-[var(--text-muted)]">
                            Employee Management · Team Sync
                        </p>

                    </div>

                </div>

            </div>

        </div>

    );
};

export default Employee;

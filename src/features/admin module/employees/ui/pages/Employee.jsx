import { Link } from "react-router";
import { Plus } from "lucide-react";
import { useEmployee } from "../../hooks/useEmployees";
import EmployeePagination from "../components/employees/EmployeePagination";
import EmployeeStats from "../components/employees/EmployeeStats";
import EmployeeTable from "../components/employees/EmployeeTable";
import EmployeeToolbar from "../components/employees/EmployeeToolbar";

const Employee = () => {
    const {
        data,
        isPending,
        isError,
        error,
        filters,
        setFilters,
        updateEmployee,
        updateEmployeeError,
        isUpdatingEmployee
    } = useEmployee();

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

    const employees = data?.employees || [];
    const departments = [...new Set(employees.map((employee) => employee.department))];

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

                <EmployeeStats
                    employees={employees}
                    total={data?.pagination?.total ?? employees.length}
                />

                <section className="overflow-hidden rounded-xl border border-[var(--border-color)] bg-[var(--bg-surface)] shadow-[var(--shadow-md)]">
                    <div className="border-b border-[var(--border-color)] p-5 sm:p-6">
                        <h2 className="text-lg font-semibold text-[var(--text-primary)]">
                            All Employees
                        </h2>
                        <p className="mt-1 text-sm text-[var(--text-muted)]">
                            View and manage your organization's employees.
                        </p>

                        <EmployeeToolbar departments={departments} filters={filters} setFilters={setFilters} />
                        {updateEmployeeError && (
                            <p role="alert" className="mt-3 text-sm text-[var(--danger)]">
                                {updateEmployeeError.message}
                            </p>
                        )}
                    </div>

                    <EmployeeTable
                        employees={employees}
                        onUpdateEmployee={updateEmployee}
                        isUpdatingEmployee={isUpdatingEmployee}
                    />

                    <EmployeePagination
                        pagination={{
                            ...data?.pagination,
                            total: data?.pagination?.total ?? employees.length
                        }}
                    />
                </section>
            </div>
        </div>
    );
};

export default Employee;

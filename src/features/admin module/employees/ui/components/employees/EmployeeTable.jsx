
import EmployeeRow from "./EmployeeRow";

const EmployeeTable = ({ employees, onUpdateEmployee, isUpdatingEmployee }) => {

    return (
        <div className="overflow-x-auto">

            <table className="w-full text-left whitespace-nowrap">

                <thead className="sticky top-0 border-b border-[var(--border-color)] bg-[var(--bg-main)]">
                    <tr className="text-xs uppercase tracking-wider text-[var(--text-muted)]">
                        <th className="px-6 py-4 text-left font-semibold">Employee</th>
                        <th className="px-6 py-4 text-left font-semibold">Department</th>
                        <th className="px-6 py-4 text-left font-semibold">Role</th>
                        <th className="px-6 py-4 text-left font-semibold">Status</th>
                        <th className="px-6 py-4 text-left font-semibold">Joining Date</th>
                        <th className="px-6 py-4 text-center font-semibold">Actions</th>
                    </tr>
                </thead>

                <tbody className="divide-y divide-[var(--border-color)]">

                    {employees.map((employee) => (
                        <EmployeeRow
                            key={employee._id}
                            employee={employee}
                            onUpdateEmployee={onUpdateEmployee}
                            isUpdatingEmployee={isUpdatingEmployee}
                        />
                    ))}

                    {employees.length === 0 && (
                        <tr>
                            <td colSpan="6" className="px-6 py-16 text-center">
                                <div className="mb-3 text-4xl">🔍</div>
                                <h3 className="text-base font-semibold text-[var(--text-primary)]">
                                    No employees found
                                </h3>
                                <p className="mt-2 text-sm text-[var(--text-muted)]">
                                    Try changing your search or filters.
                                </p>
                            </td>
                        </tr>
                    )}

                </tbody>

            </table>

        </div>
    );
};

export default EmployeeTable;

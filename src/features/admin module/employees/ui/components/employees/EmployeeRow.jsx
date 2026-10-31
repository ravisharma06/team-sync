
import { EllipsisVerticalIcon } from "lucide-react";

const EmployeeRow = ({ employee, onUpdateEmployee, isUpdatingEmployee }) => {

    const getInitials = (name = "") => name
        .split(" ")
        .filter(Boolean)
        .slice(0, 2)
        .map((word) => word[0])
        .join("")
        .toUpperCase();

    const formatDate = (date) => {
        if (!date) return "N/A";

        return new Date(date).toLocaleDateString("en-IN", {
            day: "numeric",
            month: "short",
            year: "numeric"
        });
    };

    return (
        <tr className="transition-colors hover:bg-[var(--bg-hover)]">

            <td className="px-6 py-4">
                <div className="flex items-center gap-3">

                    {employee.avatar ? (
                        <img
                            src={employee.avatar}
                            alt={employee.name}
                            className="h-10 w-10 rounded-full object-cover"
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

            <td className="px-6 py-4">
                <span className="rounded-md bg-[var(--bg-hover)] px-3 py-1.5 text-xs font-medium capitalize text-[var(--text-secondary)]">
                    {employee.department || "N/A"}
                </span>
            </td>

            <td className="px-6 py-4 text-sm capitalize text-[var(--text-secondary)]">
                {employee.role}
            </td>

            <td className="px-6 py-4">
                <span className={`inline-flex items-center gap-2 rounded-full border border-[var(--border-color)] px-3 py-1.5 text-xs font-medium ${employee.status === "active"
                    ? "text-[var(--success)]"
                    : "text-[var(--danger)]"
                    }`}>
                    <span className={`h-1.5 w-1.5 rounded-full ${employee.status === "active"
                        ? "bg-[var(--success)]"
                        : "bg-[var(--danger)]"
                        }`} />
                    {employee.status || "Unknown"}
                </span>
            </td>

            <td className="px-6 py-4 text-sm text-[var(--text-muted)]">
                {formatDate(employee.createdAt)}
            </td>

            <td className="relative px-6 py-4 text-center">
                <details className="relative inline-block ">
                    <summary
                        aria-label="Open employee actions"
                        className="grid size-9 cursor-pointer list-none place-items-center rounded-lg hover:bg-[var(--bg-hover)] [&::-webkit-details-marker]:hidden"
                    >
                        <EllipsisVerticalIcon />
                    </summary>

                    <div className="absolute right-0 z-10 mt-1 min-w-36 rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)] p-2 shadow-lg">
                        <button
                            onClick={() => onUpdateEmployee({
                                employeeId: employee._id,
                                status: employee.status
                            })}
                            disabled={isUpdatingEmployee}
                            type="button"
                            className="w-full cursor-pointer rounded-md px-3 py-2 text-left text-sm text-[var(--success)] hover:bg-[var(--bg-hover)] disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            {employee.status === "active" ? "Mark as inactive" : "Mark as active"}
                        </button>
                    </div>
                </details>
            </td>

        </tr>
    );
};

export default EmployeeRow;

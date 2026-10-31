

const EmployeePagination = ({ pagination }) => {
    const page = pagination?.page ?? 1;
    const totalPages = pagination?.totalPages ?? 1;
    const total = pagination?.total ?? 0;

    return (
        <div className="flex flex-col items-center justify-between gap-3 border-t border-[var(--border-color)] px-5 py-4 sm:flex-row">
            <p className="text-xs text-[var(--text-muted)]">
                Page {page} of {totalPages} · {total} total employees
            </p>
            <p className="text-xs text-[var(--text-muted)]">
                Employee Management · Team Sync
            </p>
        </div>
    );
};

export default EmployeePagination;

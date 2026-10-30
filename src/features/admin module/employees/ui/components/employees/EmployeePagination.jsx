

const EmployeePagination = ({ pagination }) => {

    return (
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3">

            <p className="text-sm text-gray-500">
                Showing page {pagination.page} of {pagination.totalPages}
                {" "}({pagination.total} employees)
            </p>

            <div className="flex gap-2">

                <button
                    disabled={pagination.page === 1}
                    className="border rounded-lg px-4 py-2 disabled:opacity-40"
                >
                    Previous
                </button>

                <button
                    disabled={pagination.page === pagination.totalPages}
                    className="border rounded-lg px-4 py-2 disabled:opacity-40"
                >
                    Next
                </button>

            </div>

        </div>
    );
};

export default EmployeePagination;

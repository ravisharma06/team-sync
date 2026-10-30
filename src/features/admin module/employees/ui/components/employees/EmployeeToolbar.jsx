
const EmployeeToolbar = () => {

    return (
        <div className="flex flex-col sm:flex-row gap-3 justify-between">

            <input
                type="text"
                placeholder="Search employees..."
                className="border rounded-lg px-4 py-2 w-full sm:max-w-sm outline-none focus:ring-2 focus:ring-blue-500"
            />

            <div className="flex gap-3">

                <select className="border rounded-lg px-4 py-2">
                    <option value="">All Departments</option>
                    <option value="common">Common</option>
                </select>

                <select className="border rounded-lg px-4 py-2">
                    <option value="">All Status</option>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                </select>

            </div>

        </div>
    );
};

export default EmployeeToolbar;

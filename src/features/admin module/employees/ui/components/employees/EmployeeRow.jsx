
const EmployeeRow = ({ employee }) => {

    return (
        <tr className="hover:bg-gray-50">

            <td className="p-4">
                <div className="flex items-center gap-3">

                    <img
                        src={
                            employee.avatar ||
                            `https://ui-avatars.com/api/?name=${encodeURIComponent(employee.name)}`
                        }
                        alt={employee.name}
                        className="w-10 h-10 rounded-full object-cover"
                    />

                    <div>
                        <p className="font-medium text-gray-800">
                            {employee.name}
                        </p>

                        <p className="text-gray-500 text-xs">
                            {employee.email}
                        </p>
                    </div>

                </div>
            </td>

            <td className="p-4">{employee.department}</td>

            <td className="p-4 capitalize">{employee.role}</td>

            <td className="p-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    employee.status === "active"
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-100 text-gray-600"
                }`}>
                    {employee.status}
                </span>
            </td>

            <td className="p-4">
                {new Date(employee.createdAt).toLocaleDateString()}
            </td>

            <td className="p-4">
                <button className="text-blue-600 hover:underline">
                    View
                </button>
            </td>

        </tr>
    );
};

export default EmployeeRow;

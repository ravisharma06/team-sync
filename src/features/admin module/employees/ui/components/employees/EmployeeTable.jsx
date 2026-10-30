
import EmployeeRow from "./EmployeeRow";

const EmployeeTable = ({ employees }) => {

    return (
        <div className="bg-white border rounded-xl overflow-x-auto">

            <table className="w-full text-sm text-left">

                <thead className="bg-gray-50 text-gray-500">
                    <tr>
                        <th className="p-4">Employee</th>
                        <th className="p-4">Department</th>
                        <th className="p-4">Role</th>
                        <th className="p-4">Status</th>
                        <th className="p-4">Joining Date</th>
                        <th className="p-4">Actions</th>
                    </tr>
                </thead>

                <tbody className="divide-y">

                    {employees.map((employee) => (
                        <EmployeeRow
                            key={employee._id}
                            employee={employee}
                        />
                    ))}

                    {employees.length === 0 && (
                        <tr>
                            <td colSpan="6" className="p-8 text-center text-gray-500">
                                No employees found.
                            </td>
                        </tr>
                    )}

                </tbody>

            </table>

        </div>
    );
};

export default EmployeeTable;

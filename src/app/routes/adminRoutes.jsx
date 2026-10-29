import AllDepartment from "../../features/admin module/departments/ui/pages/AllDepartment";
import Department from "../../features/admin module/departments/ui/pages/Department";
import AddEmployee from "../../features/admin module/employees/ui/pages/AddEmployee";
import Employee from "../../features/admin module/employees/ui/pages/Employee";
import Document from "../../features/admin module/documents/ui/pages/Document";
import Task from "../../features/admin module/tasks/ui/pages/Task";


export const adminRoutes = [
    {
        path: "/home/employee",
        element: <Employee />
    },
    {
        path: "/home/add-employee",
        element: <AddEmployee />
    },
    {
        path: "/home/task",
        element: <Task />
    },
    {
        path: "/home/department",
        element: <Department />
    },
    {
        path: "/home/document",
        element: <Document />
    },
    {
        path: '/home/all-departments',
        element: <AllDepartment />
    }
]
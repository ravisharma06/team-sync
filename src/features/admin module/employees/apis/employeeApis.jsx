import { axiosInstance } from "../../../../config/axiosInstance";


export const getAllEmployees = async ({
    page = 1,
    limit = 20,
    department,
    status,
    search
} = {}) => {
    const res = await axiosInstance.get(`/employee?page=${page}&limit=${limit}&search=${search}&department=${department}&status=${status}`)



    return res.data.data
}



export const updateEmployee = async (empId, data) => {
    const status = data === "active" ? "inactive" : "active";
    const response = await axiosInstance.patch(`/employee/update/${empId}`, { status });
    return response.data;
}
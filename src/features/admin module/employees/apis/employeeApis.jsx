import { axiosInstance } from "../../../../config/axiosInstance";


export const getAllEmployees = async () => {
    try {

        let res = await axiosInstance.get("/employee")
        
        return res.data.data
    } catch (error) {
        console.log("error in all employee api", error);
    }
}


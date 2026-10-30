import { useQuery } from "@tanstack/react-query";
import { getAllEmployees } from "../apis/employeeApis";



export let useEmployee = () => {


    let { data, isPending } = useQuery({

        queryKey: ["employees"],
        queryFn: () => {
            return getAllEmployees()
        },
        staleTime: 10000
    })


    return {
        data,
        isPending
    }
}
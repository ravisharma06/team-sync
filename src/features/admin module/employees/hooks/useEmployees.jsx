import { keepPreviousData, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getAllEmployees, updateEmployee as updateEmployeeApi } from "../apis/employeeApis";
import { useState } from "react";



export let useEmployee = () => {
    const queryClient = useQueryClient();

    const [filters, setFilters] = useState({
        search: "",
        department: "",
        status: ""

    })




    const { data, isPending, isError, error } = useQuery({
        queryKey: ["employees",filters],
        queryFn: () => getAllEmployees({ page: 1, limit: 20, search: filters.search, department: filters.department, status: filters.status }),
        staleTime: 10000,
        placeholderData : keepPreviousData
    })

    const updateEmployeeMutation = useMutation({
        mutationFn: ({ employeeId, status }) => updateEmployeeApi(employeeId, status),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ["employees"] })
    });


    
    



    return {
        data,
        isPending,
        isError,
        error,
        filters,
        setFilters,
        updateEmployee: updateEmployeeMutation.mutate,
        updateEmployeeError: updateEmployeeMutation.error,
        isUpdatingEmployee: updateEmployeeMutation.isPending

    }

}

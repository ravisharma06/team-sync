import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../config/axiosInstance";





export const loginEmployee = createAsyncThunk(
    "auth/login",
    async (credentails, thunkApi) => {
        try {
            const res = await axiosInstance.post("/auth/login", credentails)
            return res.data.data
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    }
)


export const currentLoggedEmployee = createAsyncThunk("auth/me", async (credentails, thunkApi) => {
    try {

        const res = await axiosInstance.get("/auth/me")
        return res.data.user
    } catch (error) {
        return thunkApi.rejectWithValue(error)
    }
})
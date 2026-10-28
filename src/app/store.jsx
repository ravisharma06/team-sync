import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/state/authSlice'
import themeSlice from '../shared/state/themeSlice';


export const store = configureStore({

    reducer: {
        auth: authReducer,
        theme: themeSlice.reducer
    }
})
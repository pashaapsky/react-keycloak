import {createSlice} from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        user: null,
        errors: ''
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        },
        setError: (state, action) => {
            state.errors = action.payload
        },
        clearError: state => {
            state.errors = ''
        }
    }
});

export const {setUser, clearError, setError } = appSlice.actions;

export default appSlice.reducer;
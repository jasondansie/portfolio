import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'userData',
    initialState: {
        userData: [],
        isLoading: false,
        isAuthenticated: false,
        userToken: "",
    },

    reducers: {
        loadUserData: (state, action) => {
            state.userData = action.payload;
        },
        isLoading(state, action){
            state.isLoading = action.payload;
        },
        isAuthenticated(state, action){
            state.isAuthenticated = action.payload;
        },
        addToken(state, action){
            state.userToken = action.payload;
        }
    },
})


export const { loadUserData, isLoading, isAuthenticated, addToken } = userSlice.actions;
export const userInfo = (state) => state.user.userData;
export default userSlice.reducer;
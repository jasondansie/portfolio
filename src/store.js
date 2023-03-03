import { configureStore } from "@reduxjs/toolkit";
import userSlice from './components/features/UserSlice';

export default configureStore({
    reducer:{
        user: userSlice,
    }
})
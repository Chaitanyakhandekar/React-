import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../features/authSlice';

const store = configureStore({
    reducer : todoReducer
});

export default store;
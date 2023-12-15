import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./features/auth/userReducer";

export default configureStore({
  reducer: {
    user: userReducer, 
  },
});

 
//Host
export const server='http://192.168.2.39:8080/api/v1';
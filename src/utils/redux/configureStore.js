import { configureStore } from "@reduxjs/toolkit";
import currentUserReducer from "./currentUserSlice";
import loginReducer from "./loginSlice";
import signupReducer from "./signupSlice";
import logoutReducer from "./logoutSlice";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    signup: signupReducer,
    currentUser: currentUserReducer,
    logout: logoutReducer,
  },
});

import { configureStore } from "@reduxjs/toolkit";
import currentUserReducer from "./currentUserSlice";
import loginReducer from "./loginSlice";
import signupReducer from "./signupSlice";
import logoutReducer from "./logoutSlice";
import customersReducer from "./customersSlice";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    signup: signupReducer,
    currentUser: currentUserReducer,
    logout: logoutReducer,
    customers: customersReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

import { createSlice } from "@reduxjs/toolkit";

export const signupSlice = createSlice({
  name: "signup",
  initialState: {
    email: "",
    password: "",
    confirmPassword: "",
  },
});

export default signupSlice.reducer;

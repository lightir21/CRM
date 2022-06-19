import { createSlice } from "@reduxjs/toolkit";
import { createAdminDocumentFromAuth, signup } from "../firebase/firebase";

const initialState = {
  email: "",
  password: "",
  confirmPassword: "",
  uid: "",
};

export const signupSlice = createSlice({
  name: "signup",
  initialState: { value: initialState },
  reducers: {
    signUpUser: (state, action) => {
      signup(
        action.payload.email,
        action.payload.password,
        action.payload.confirmPassword
      );
    },
    addDoc: (state, action) => {
      createAdminDocumentFromAuth();
    },
  },
});

export const { signUpUser } = signupSlice.actions;
export default signupSlice.reducer;

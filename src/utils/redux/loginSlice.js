import { createSlice } from "@reduxjs/toolkit";
import { signIn } from "../firebase/firebase";

const initialState = {
  email: "",
  password: "",
};

export const loginSlice = createSlice({
  name: "login",
  initialState: { value: initialState },
  reducers: {
    loginUser: (state, action) => {
      signIn(action.payload.email, action.payload.password);
    },
  },
});

export const { loginUser } = loginSlice.actions;

export default loginSlice.reducer;

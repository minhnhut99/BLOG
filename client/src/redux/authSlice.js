import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "./authActions";

const userToken = localStorage.getItem("user_token")
  ? localStorage.getItem("user_token")
  : null;
const authSlice = createSlice({
  name: "auth",
  initialState: {
    userToken,
    loading: false,
    userInfo: null,
    error: null,
    success: false,
  },
  reducers: {
    updateUser: (state, action) => {
      state.data = {
        ...state.data,
        ...action.payload,
      };
    },
    logout: (state, action) => {
      state.data = {};
      // localStorage.clear();
      localStorage.removeItem("user_token");
      window.location.reload();
    },
    setCredentials: (state, { payload }) => {
      state.userInfo = payload;
    },
  },
  extraReducers: {
    //login

    [loginUser.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.userInfo = payload;
      state.userToken = payload.userToken;
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    // register user
    [registerUser.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true; // register successfully
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});
export const { logout, setCredentials } = authSlice.actions;
export default authSlice.reducer;

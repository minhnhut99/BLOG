import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { registerUser } from "";
import { fetchData } from "../utils/connect";

export const login = createAsyncThunk(
  "user/login",
  async ({ payload, callback }) => {
    const user = await fetchData("/login", { body: payload });
    if (user.token) {
      localStorage.setItem("user", JSON.stringify(user.data));
      localStorage.setItem("accesstoken", user.token);
      setTimeout(() => {
        callback("done", null);
      }, 1000);
      return user;
    } else {
      callback("error", user.message);
      return null;
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    // data: JSON.parse(localStorage.getItem("user")),
    loading: false,
    userInfo: null,
    userToken: null,
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
      localStorage.clear();
      window.location.reload();
    },
  },
  extraReducers: {
    // register user
    [registerUser.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [registerUser.fullfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true; // register successfully
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export default authSlice.reducer;

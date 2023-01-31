import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData } from "../utils/connect";

export const login = createAsyncThunk(
  "user/login",
  async ({ payload, callback }) => {
    const user = await fetchData("/login", { body: payload });
    console.log("user", user);
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

export const signup = createAsyncThunk(
  "user/register",
  async ({ payload, callback }) => {
    const user = await fetchData("/register", { body: payload });

    if (user.token) {
      localStorage.setItem("user", JSON.stringify(user.data));
      localStorage.setItem("accesstoken", user.token);
      callback(true, null);
      return user;
    }
    callback(false, user.message);
    return null;
  }
);
const authSlice = createSlice({
  name: "auth",
  initialState: {
    data: JSON.parse(localStorage.getItem("user")),
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
});
const { actions, reducer } = authSlice;
export const { updateUser, logout } = actions;
export default reducer;

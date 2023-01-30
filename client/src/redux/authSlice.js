import { createSlice } from "@reduxjs/toolkit";

const initState = {
  userInfo: {},
  userToken: null,
  error: null,
  success: false,
};

const authSlice = createSlice({
  name: "auth",
  initState,
  reducers: {},
});

export default authSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import jwt_decode from "jwt-decode";

const initialState = {
  state: "idle",
  value: [],
  error: {},
  select: {},
};

export const loginUser = createAsyncThunk(
  "users/login",
  async ({ email, password }, thunkAPI) => {
    try {
      const res = await axios.post("https://www.se-bistro.online/api/v1/auth/signIn",{
        email,
        password,
      })
      return res.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: {
    [loginUser.pending]: (state, action) => {
      state.state = "loading";
    },
    [loginUser.fulfilled]: (state, action) => {
      state.state = "idle";
      state.select = action.payload;
      console.log("response", action.payload);
      const decoded = jwt_decode(action.payload.token);
      console.log(decoded);
    },
    [loginUser.rejected]: (state, action) => {
      state.state = "error";
      state.error = action.payload;
      console.log("action.payload", action.payload);
    },
  },
});

export default loginSlice.reducer;

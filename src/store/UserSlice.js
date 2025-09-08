import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  name: null,
  email: null,
  token: null,
  role: null,
  permission: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    saveReducerInfo: (state, action) => {
      state.id = action.payload._id;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.role = action.payload.role;
      state.permission = action.payload.permission;
    },
  },
});

export const { saveReducerInfo } = userSlice.actions;

export default userSlice.reducer;

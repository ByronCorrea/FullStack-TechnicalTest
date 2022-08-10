import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  token: "",
  email: "",
  firstName: "",
  lastName: "",
  img: "",
  isAdmin: "",
  isBanned: "",
};

export const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      return action.payload;
    },
    clearUser: (state, action) => {
      return initialState;
    },
  },
});

export const { setUser, clearUser } = user.actions;

export default user.reducer;

import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

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

export const putUser = (id, data) => async (dispatch) => {
  try {
    await axios
      .put(`/customers/${id}`, data, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        dispatch(setUser(res.data.customer));
      });
  } catch (error) {
    console.log(error);
  }
};

export const { setUser, clearUser } = user.actions;

export default user.reducer;

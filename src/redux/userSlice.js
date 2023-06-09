import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    setToken(state, action) {
      return action.payload;
    },
    logout(state, action) {
      return null;
    },
    follow(state, action) {
      const index = state.following.indexOf(action.payload);
      if (index === -1) {
        state.following.push(action.payload);
      } else {
        state.following.splice(index, 1);
      }
    },
  },
});

const { actions, reducer } = userSlice;
export const { setToken, logout, follow } = actions;
export default reducer;

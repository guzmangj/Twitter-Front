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
      if (!state.following.includes(action.payload)) {
        state.following.push(action.payload);
      } else {
        return state.following.filter((isFollowing) => isFollowing !== action.payload._id);
      }
    },
  },
});

const { actions, reducer } = userSlice;
export const { setToken, logout, follow } = actions;
export default reducer;

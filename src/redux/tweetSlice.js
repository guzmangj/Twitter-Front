import { createSlice } from "@reduxjs/toolkit";

const tweetSlice = createSlice({
  name: "tweet",
  initialState: null,
  reducers: {
    createTweet(state, action) {
      state.push(action.payload);
    },
    deleteTweet(state, action) {
      return;
    },
  },
});

const { actions, reducer } = tweetSlice;
export const { createTweet, deleteTweet } = actions;
export default reducer;

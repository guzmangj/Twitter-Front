import { createSlice } from "@reduxjs/toolkit";

const tweetSlice = createSlice({
  name: "tweet",
  initialState: null,
  reducers: {
    setTweets(state, action) {
      return action.payload;
    },
    createTweet(state, action) {
      return state.push(action.payload.tweet);
    },
    deleteTweet(state, action) {
      return;
    },
  },
});

const { actions, reducer } = tweetSlice;
export const { createTweet, deleteTweet, setTweets } = actions;
export default reducer;

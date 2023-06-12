import { createSlice } from "@reduxjs/toolkit";

const tweetSlice = createSlice({
  name: "tweets",
  initialState: [],
  reducers: {
    setTweets(state, action) {
      return action.payload;
    },
    createTweet(state, action) {
      state.unshift(action.payload);
    },
    deleteTweet(state, action) {
      return state.filter((tweet) => tweet.id !== action.payload);
    },
  },
});

const { actions, reducer } = tweetSlice;
export const { createTweet, deleteTweet, setTweets } = actions;
export default reducer;

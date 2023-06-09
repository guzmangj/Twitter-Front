import { createSlice } from "@reduxjs/toolkit";

const tweetSlice = createSlice({
  name: "tweets",
  initialState: [],
  reducers: {
    setTweets(state, action) {
      return action.payload;
    },
    createTweet(state, action) {
      state.push(action.payload.tweet);
    },
    deleteTweet(state, action) {
      return state.filter((tweet) => tweet._id !== action.payload._id);
    },
  },
});

const { actions, reducer } = tweetSlice;
export const { createTweet, deleteTweet, setTweets } = actions;
export default reducer;

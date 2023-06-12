import { createSlice } from "@reduxjs/toolkit";

const tweetSlice = createSlice({
  name: "tweet",
  initialState: null,
  reducers: {
    setTweets(state, action) {
      return action.payload;
    },
    createTweet(state, action) {
      state.push(action.payload);
    },
    likeTweet(state, action) {
      const tweet = state.find((tweet) => tweet._id === action.payload.tweetId);
      tweet.likes.push(action.payload.userId);
    },
    dislikeTweet(state, action) {
      const tweet = state.find((tweet) => tweet._id === action.payload.tweetId);
      tweet.likes = tweet.likes.filter((user) => user !== action.payload.userId);
    },
    deleteTweet(state, action) {
      return state;
    },
  },
});

const { actions, reducer } = tweetSlice;
export const { createTweet, deleteTweet, setTweets, likeTweet, dislikeTweet } = actions;
export default reducer;

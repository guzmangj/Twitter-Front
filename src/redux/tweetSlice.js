import { createSlice } from "@reduxjs/toolkit";

const tweetSlice = createSlice({
  name: "tweets",
  initialState: [],
  reducers: {
    setTweets(state, action) {
      const sortedTweets = [...action.payload].sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB - dateA;
      });
      return sortedTweets;
    },
    createTweet(state, action) {
      state.unshift(action.payload);
    },
    likeTweet(state, action) {
      const tweet = state.find((tweet) => tweet._id === action.payload.tweetId);
      tweet.likes.push(action.payload.userId);
    },
    dislikeTweet(state, action) {
      const tweet = state.find((tweet) => tweet._id === action.payload.tweetId);
      tweet.likes = tweet.likes.filter((user) => user !== action.payload.userId);
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
      return state.filter((tweet) => tweet.id !== action.payload);
    },
  },
});

const { actions, reducer } = tweetSlice;
export const { createTweet, deleteTweet, setTweets, likeTweet, dislikeTweet } = actions;
export default reducer;

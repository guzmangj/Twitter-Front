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
    deleteTweet(state, action) {
      return state.filter((tweet) => tweet.id !== action.payload);
    },
  },
});

const { actions, reducer } = tweetSlice;
export const { createTweet, deleteTweet, setTweets } = actions;
export default reducer;

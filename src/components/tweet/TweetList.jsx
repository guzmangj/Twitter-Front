import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTweets } from "../../redux/tweetSlice";
import Tweet from "./Tweet";

function TweetList() {
  const tweets = useSelector((state) => state.tweets);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getTweets() {
      const response = await axios({
        method: "GET",
        url: `${import.meta.env.VITE_REACT_APP_BACKEND_URL}/tweets`,
      });
      response.data && dispatch(setTweets(response.data));
    }
    getTweets();
  }, []);

  return (
    tweets.length > 0 &&
    tweets.map((tweet) => {
      return <Tweet tweet={tweet} key={tweet.id} />;
    })
  );
}

export default TweetList;

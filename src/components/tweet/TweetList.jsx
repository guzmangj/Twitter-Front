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
        method: "get",
        url: "http://localhost:3000/tweets",
      });
      response.data && dispatch(setTweets(response.data));
    }
    getTweets();
  }, []);

  return (
    tweets.length > 0 &&
    tweets.map((tweet) => {
      const isFollowing = user.following.includes(tweet.user._id);
      const isCurrentUser = tweet.user._id === user.id;

      if (isFollowing || isCurrentUser) {
        return <Tweet tweet={tweet} key={tweet._id} />;
      }

      return null;
    })
  );
}

export default TweetList;

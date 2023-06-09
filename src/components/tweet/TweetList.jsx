import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTweets } from "../../redux/tweetSlice";
import Tweet from "./Tweet";

function TweetList() {
  const tweet = useSelector((state) => state.tweet);
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
    tweet &&
    tweet.map((tweet, index) => {
      const isFollowing = user.following.includes(tweet.user._id);
      const isCurrentUser = tweet.user._id === user.id;

      if (isFollowing || isCurrentUser) {
        return <Tweet tweet={tweet} key={index} />;
      }

      return null;
    })
  );
}

export default TweetList;

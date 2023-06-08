import React from "react";
import { NavLink } from "react-router-dom";
import Delete from "/src/assets/delete.svg";
import Like from "/src/assets/like.svg";
import Likeactive from "/src/assets/like-active.svg";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTweets } from "../../redux/tweetSlice";
import Tweet from "./Tweet";

import "./TweetList.css";

function TweetList() {
  const tweet = useSelector((state) => state.tweet);
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

  return tweet && tweet.map((tweet) => <Tweet tweet={tweet} />);
}

export default TweetList;

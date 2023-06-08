import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTweets } from "../../redux/tweetSlice";
import Tweet from "./Tweet";

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

  return tweet && tweet.map((tweet, index) => <Tweet tweet={tweet} key={index} />);
}

//  tweet
//    .filter((tweet) => tweet.user._id === user.following || tweet.user._id === user.id)
//    .map((tweet, index) => <Tweet tweet={tweet} key={index} />);

export default TweetList;

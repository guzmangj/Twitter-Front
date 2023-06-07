import React from "react";
import { NavLink } from "react-router-dom";
import Delete from "/src/assets/delete.svg";
import Like from "/src/assets/like.svg";
import Likeactive from "/src/assets/like-active.svg";
import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
// import { setToken } from "../redux/userSlice";

import "./TweetList.css";

function TweetList() {
  const [tweets, setTweets] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    async function getTweets() {
      const response = await axios({
        method: "get",
        url: "http://localhost:3000/tweets",
      });
      //   dispatch(setTweets(response.data.token));
      setTweets(response.data);
    }
    getTweets();
  }, []);

  return (
    tweets &&
    tweets.map((tweet) => (
      <div key={tweet._id} className="tweet border border-top-0 p-3">
        <div className="tweet-header d-flex" style={{ marginBottom: "0px 0px 10px" }}>
          <div>
            <NavLink to="/profile" style={{ textDecoration: "none", color: "black" }}>
              <img
                src=""
                alt="Avatar del usuario"
                className="tweet-avatar"
                style={{ width: "45px", height: "45px", borderRadius: "50%", marginRight: "10px" }}
              />
            </NavLink>
          </div>
          <div className="w-100">
            <div className="d-flex justify-content-between" style={{ height: "20%" }}>
              <div className="tweet-fullname d-flex" style={{ fontWeight: "bold" }}>
                <NavLink to="/profile" style={{ textDecoration: "none", color: "black" }}>
                  Firstname lastname
                </NavLink>
                <span className="tweet-username fw-light" style={{ color: "#888" }}>
                  <NavLink
                    to="/profile"
                    style={{ textDecoration: "none", color: "#888", marginLeft: "0.3rem" }}
                  >
                    @username
                  </NavLink>
                  {/* &bull; tweet.formattedData */}
                </span>
              </div>
            </div>
            <div className="tweet-content mt-1" style={{ marginBottom: "10px", height: "40%" }}>
              {tweet.content}
            </div>
            <div
              className="tweet-footer"
              style={{
                display: "flex",
                justifyContent: "space-between",
                color: "#888",
                fontSize: "12px",
                height: "20%",
              }}
            >
              <div className="tweet-actions d-flex align-items-center">
                {/* if(tweet.likes.includes(loggedUser.id)) */}
                <div>
                  <form method="post" action="/dislike/<%= tweet.id %>?_method=UPDATE">
                    <img src={Likeactive} alt="Activelike icon" />
                  </form>
                </div>
                <div>{tweet.likes.length}</div>
                {/* else  */}
                <div>
                  <form method="post" action="/like/<%= tweet.id %>?_method=UPDATE">
                    <img src={Like} alt="Like icon" />
                  </form>
                </div>
                <div>{tweet.likes.length}</div>
              </div>
              {/* if(loggedUser.id === user.id && profile) */}
              <div>
                <form method="post" action="">
                  <img src={Delete} alt="Delete icon" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))
  );
}

export default TweetList;

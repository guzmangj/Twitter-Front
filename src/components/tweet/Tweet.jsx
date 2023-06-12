import React from "react";
import { NavLink } from "react-router-dom";
import Delete from "/src/assets/delete.svg";
import Like from "/src/assets/like.svg";
import Likeactive from "/src/assets/like-active.svg";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useState } from "react";
import { likeTweet } from "../../redux/tweetSlice";
import { dislikeTweet } from "../../redux/tweetSlice";

function Tweet({ tweet }) {
  const user = useSelector((state) => state.user);
  const [tweetData, setTweetData] = useState(tweet);
  const dispatch = useDispatch();

  const handleLike = async (tweetId) => {
    const data = {
      userId: user.id,
    };
    await axios
      .post(`http://localhost:3000/like/${tweetId}`, data)
      .then((response) => {
        console.log("Like successful", response.data);
        dispatch(
          likeTweet({
            tweetId,
            userId: user.id,
          }),
        );
      })
      .catch((error) => {
        console.error("Error liking tweet", error);
      });
  };

  const handleDislike = async (tweetId) => {
    const data = {
      userId: user.id,
    };
    await axios
      .post(`http://localhost:3000/dislike/${tweetId}`, data)
      .then((response) => {
        console.log("Dislike successful", response.data);
        dispatch(
          dislikeTweet({
            tweetId,
            userId: user.id,
          }),
        );
      })
      .catch((error) => {
        console.error("Error disliking tweet", error);
      });
  };
  return (
    <div key={tweet._id} className="tweet border border-top-0 p-3">
      <div className="tweet-header d-flex" style={{ marginBottom: "0px 0px 10px" }}>
        <div>
          <NavLink
            to={`/profile/${tweet.user._id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <img
              src={tweet.user.image}
              alt="Avatar del usuario"
              className="tweet-avatar"
              style={{
                width: "45px",
                height: "45px",
                borderRadius: "50%",
                marginRight: "10px",
              }}
            />
          </NavLink>
        </div>
        <div className="w-100">
          <div className="d-flex justify-content-between" style={{ height: "20%" }}>
            <div className="tweet-fullname d-flex" style={{ fontWeight: "bold" }}>
              <NavLink
                to={`/profile/${tweet.user._id}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                {tweet.user.firstname} {tweet.user.lastname}
              </NavLink>
              <span className="tweet-username fw-light" style={{ color: "#888" }}>
                <NavLink
                  to={`/profile/${tweet.user._id}`}
                  style={{ textDecoration: "none", color: "#888", marginLeft: "0.3rem" }}
                >
                  @{tweet.user.username}
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
              {tweet.likes.includes(user.id) ? (
                <>
                  <div>
                    <img
                      src={Likeactive}
                      alt="Activelike icon"
                      onClick={() => handleDislike(tweet._id)}
                    />
                  </div>
                  <div>{tweetData.likes.length}</div>
                </>
              ) : (
                <>
                  <div>
                    <img src={Like} alt="Like icon" onClick={() => handleLike(tweet._id)} />
                  </div>
                  <div>{tweetData.likes.length}</div>
                </>
              )}
            </div>

            {user.id === tweet.user._id ? (
              <div>
                <form method="post" action="">
                  <img src={Delete} alt="Delete icon" />
                </form>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tweet;

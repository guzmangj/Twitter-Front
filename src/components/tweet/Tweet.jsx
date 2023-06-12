import React from "react";
import { NavLink } from "react-router-dom";
import Delete from "/src/assets/delete.svg";
import Like from "/src/assets/like.svg";
import Likeactive from "/src/assets/like-active.svg";
import { useSelector, useDispatch } from "react-redux";
import { deleteTweet } from "../../redux/tweetSlice";
import axios from "axios";
import "./Tweet.css";
//import { useParams } from "react-router-dom";

function Tweet({ tweet }) {
  const user = useSelector((state) => state.user);
  //const params = useParams();
  const dispatch = useDispatch();

  async function deleteTweets(event) {
    event.preventDefault();
    console.log(tweet.id);
    const response = await axios({
      method: "DELETE",
      url: `http://localhost:3000/tweets/${tweet.id}`,
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    dispatch(deleteTweet(tweet.id));
  }

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
                    <form method="post" action="/dislike/<%= tweet.id %>?_method=UPDATE">
                      <img src={Likeactive} alt="Activelike icon" />
                    </form>
                  </div>
                  <div>{tweet.likes.length}</div>
                </>
              ) : (
                <>
                  <div>
                    <form method="post" action="/like/<%= tweet.id %>?_method=UPDATE">
                      <img src={Like} alt="Like icon" />
                    </form>
                  </div>
                  <div>{tweet.likes.length}</div>
                </>
              )}
            </div>

            {user.id === tweet.user._id ? (
              <div>
                <form onSubmit={deleteTweets}>
                  <button className="btn-delete" type="submit">
                    <img src={Delete} alt="Delete icon" />
                  </button>
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

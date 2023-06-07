import React from "react";
import { NavLink } from "react-router-dom";

function TweetList() {
  return (
    // map de los tweets
    <div className="tweet border border-top-0 p-3">
      <div className="tweet-header d-flex" style={{ marginBottom: "0px 0px 10px" }}>
        <div>
          <NavLink to="/profile" style={{ textDecoration: "none", color: "black" }}>
            <img
              src="<%= tweet.user.image %>"
              alt="Avatar del usuario"
              className="tweet-avatar"
              style={{ width: "45px", height: "45px", borderRadius: "50%", marginRight: "10px" }}
            />
          </NavLink>
        </div>
        <div className="w-100">
          <div className="d-flex justify-content-between" style="height: 20%">
            <div className="tweet-fullname d-flex" style={{ fontWeight: "bold" }}>
              <NavLink to="/profile" style={{ textDecoration: "none", color: "black" }}>
                Firstname y lastname
              </NavLink>
              <span className="tweet-username fw-light" style="color: #888">
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
            Tweet content
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
                  <button type="submit" className="btn-del mb-1">
                    {/* Svg active like */}
                  </button>
                </form>
              </div>
              <div>tweet likes length</div>
              {/* else  */}
              <div>
                <form method="post" action="/like/<%= tweet.id %>?_method=UPDATE">
                  <button type="submit" className="btn-del mb-1">
                    {/* Svg  like */}
                  </button>
                </form>
              </div>
              <div>tweet likes length</div>
            </div>
            {/* if(loggedUser.id === user.id && profile) */}
            <div>
              <form method="post" action="/tweet/<%=tweet._id%>?_method=DELETE">
                <i className="icon-end">
                  <button type="submit" className="btn-del">
                    Svg delete
                  </button>
                </i>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TweetList;

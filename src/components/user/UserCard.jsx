import React from "react";
import "./UserCard.css";

function UserCard({ userInfo }) {
  return (
    userInfo && (
      <section>
        <div className="container p-0">
          <div
            className="userBackground"
            style={{ width: "100%", height: "150px", backgroundColor: "var(--color-principal)" }}
          ></div>
          <div className="container pt-3 border border-top-0" style={{ position: "relative" }}>
            <div id="divImageProfile">
              <img
                id="imageProfile"
                src={`${import.meta.env.VITE_IMAGE_CLOUD_DIRECTION}/${userInfo.image}`}
              />
            </div>
            <div className="d-flex justify-content-between">
              <span
                id="avatar"
                style={{ width: "150px", borderRadius: "50%", borderColor: "white", border: "5px" }}
              ></span>
              {/* {  if(loggedUser.id !== user.id) { 
           if(loggedUser.following.includes(user.id)) {  
            <form method="post">
              <button
                type="submit"
                className="btn btn-login rounded-pill p-1"
                style={{ width: "90px" }}
              >
                Following
              </button>
            </form>
            {/ } else {  }
            <form method="post">
              <button
                type="submit"
                className="btn btn-login rounded-pill p-1"
                style={{ width: "90px" }}
              >
                Follow
              </button>
            </form>
             } 
          }  */}
            </div>
            <div className="d-flex justify-content-between" id="userInfo">
              <div id="username" className="mt-5">
                <h2 className="m-0 fs-4">
                  {userInfo.firstname} {userInfo.lastname}
                </h2>
                <h3 className="small">@{userInfo.username}</h3>
              </div>
              <div className="align-self-end" id="userFollowers">
                <span className="fw-semibold">{userInfo.following.length}</span>
                <span className="small me-3">
                  <a style={{ textDecoration: "none", color: "black" }}> Following</a>
                </span>
                <span className="fw-semibold">{userInfo.followers.length} </span>
                <span className="small">
                  <a
                    style={{ textDecoration: "none", color: "black" }}
                    href="/usuarios/<%=user.id%>/followers"
                  >
                    Followers
                  </a>
                </span>
              </div>
            </div>
            <div className="mt-3">
              <p
                className="fw-semibold"
                style={{
                  textDecorationLine: "underline",
                  textDecorationThickness: "3px",
                  textUnderlineOffset: "12px",
                  textDecorationColor: "var(--color-principal)",
                  marginBottom: "9px",
                }}
              >
                Tweets
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  );
}

export default UserCard;

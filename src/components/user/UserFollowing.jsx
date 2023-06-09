import React from "react";
import { useSelector } from "react-redux";

function UserFollowing({ following }) {
  const user = useSelector((state) => state.user);
  console.log(following.followers);
  return (
    user.id !== following._id && (
      <div className="d-flex">
        <div>
          <img
            src={following.image}
            alt="Profile picture default"
            style={{ width: "40px", height: "40px" }}
            className="rounded-circle m-0 mt-1"
          />
        </div>
        <div className="mb-3 flex-fill mx-2">
          <dl className="m-0 fs-5 fw-bold">
            {following.firstname}
            {following.lastname}
          </dl>
          <dd className="m-0">@{following.username}</dd>
        </div>
        <div className="mb-3 d-flex align-items-center">
          {following.followers.includes(user.id) ? (
            <form method="post">
              <button
                type="submit"
                className="btn btn-login rounded-pill p-1"
                style={{
                  width: "90px",
                  color: "black",
                  borderColor: "rgb(196, 196, 196)",
                  backgroundColor: "rgb(255, 255, 255)",
                }}
              >
                Following
              </button>
            </form>
          ) : (
            <form method="post">
              <button
                type="submit"
                className="btn btn-login rounded-pill p-1"
                style={{ width: "90px" }}
              >
                Follow
              </button>
            </form>
          )}
        </div>
      </div>
    )
  );
}

export default UserFollowing;

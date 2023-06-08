import React from "react";

function UserFollowing() {
  return (
    //    followers.forEach((follower) => {
    <div className="d-flex">
      <div>
        <img
          src="<%= follower.image %>"
          alt="Profile picture default"
          style={{ width: "40px", height: "40px" }}
          className="rounded-circle m-0 mt-1"
        />
      </div>
      <div className="mb-3 flex-fill mx-2">
        <dl className="m-0 fs-5 fw-bold">followerfirst follower last</dl>
        <dd className="m-0">@followerusername</dd>
      </div>
      <div className="mb-3 d-flex align-items-center">
        {/* <% if(loggedUser.id !== follower.id) { %>  */}
        {/* <% if(follower.followers.includes(loggedUser.id)) { %> */}
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
        {/* //   <% } else { %> */}
        <form method="post">
          <button
            type="submit"
            className="btn btn-login rounded-pill p-1"
            style={{ width: "90px" }}
          >
            Follow
          </button>
        </form>
        {/* //   <% } %> 
    // <% } %> */}
      </div>
    </div>
    // <% }) %>
  );
}

export default UserFollowing;

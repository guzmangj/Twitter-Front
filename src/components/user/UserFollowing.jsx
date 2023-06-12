import React from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { follow } from "../../redux/userSlice";

function UserFollowing({ userData }) {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  async function handleSubmit() {
    const response = await axios({
      method: "post",
      url: `http://localhost:3000/user/follow`,
      data: { userData },
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    dispatch(follow(userData.id));
  }

  return (
    user.id !== userData._id && (
      <div className="d-flex">
        <div>
          <img
            src={userData.image}
            alt="Profile picture default"
            style={{ width: "40px", height: "40px" }}
            className="rounded-circle m-0 mt-1"
          />
        </div>
        <div className="mb-3 flex-fill mx-2">
          <dl className="m-0 fs-5 fw-bold">
            {userData.firstname}
            {userData.lastname}
          </dl>
          <dd className="m-0">@{userData.username}</dd>
        </div>
        <div className="mb-3 d-flex align-items-center">
          {userData.followers.includes(user.id) ? (
            <form
              onSubmit={(event) => {
                event.preventDefault();
                handleSubmit();
              }}
            >
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
            <form
              onSubmit={(event) => {
                event.preventDefault();
                handleSubmit();
              }}
            >
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

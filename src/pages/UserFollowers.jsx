import React from "react";
import { useSelector } from "react-redux";
import StaticSidebar from "../components/sidebar/StaticSidebar";
import DinamicSidebar from "../components/sidebar/DinamicSidebar";
import { NavLink, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function UserFollowers() {
  const user = useSelector((state) => state.user);
  const [userInfo, setUserInfo] = useState(null);
  const params = useParams();

  useEffect(() => {
    async function getUsers() {
      const response = await axios({
        method: "get",
        url: `http://localhost:3000/profile/${params.id}`,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      setUserInfo(response.data);
    }
    getUsers();
  }, []);

  return (
    userInfo && (
      <section className="container">
        <div className="row">
          <div className="col-md-1 col-lg-1 col-xl-2">
            <DinamicSidebar />
          </div>
          <div className="col-md-11 col-lg-7 col-xl-7">
            <div className="border pt-4 px-4">
              <div className="d-flex align-items-center">
                <div>
                  <div>
                    <a href="/usuarios/<%=user.id%>">
                      <i className="fa-solid fa-arrow-left" style={{ color: "black" }}></i>
                    </a>
                  </div>
                </div>
                <div className="mx-4">
                  <div>
                    <h1 className="fs-4 m-0">
                      {userInfo.firstname}
                      {userInfo.lastname}
                    </h1>
                  </div>
                  <div>
                    <p>@{userInfo.username}</p>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-around">
                <div
                  className="border-bottom border-4"
                  style={{ borderColor: "var(--color-principal) !important" }}
                >
                  <h5 className="mb-2">
                    <NavLink style={{ textDecoration: "none", color: "black" }}>Followers</NavLink>
                  </h5>
                </div>

                <div>
                  <div>
                    <h5 className="mb-2">
                      <NavLink style={{ textDecoration: "none", color: "black" }}>
                        Followers
                      </NavLink>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-top-0 p-3">
              <ul>
                {userInfo.followers.map((follower) => (
                  <li>{follower}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="d-none d-lg-block col-md-4 col-xl-3">
            <StaticSidebar />
          </div>
        </div>
      </section>
    )
  );
}

export default UserFollowers;

import StaticSidebar from "../components/sidebar/StaticSidebar";
import DinamicSidebar from "../components/sidebar/DinamicSidebar";
import UserCard from "../components/user/UserCard";
import TweetList from "../components/tweet/TweetList";
import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function Profile() {
  const [userInfo, setUserInfo] = useState("");
  const user = useSelector((state) => state.user);
  // useEffect(() => {
  //   async function getUserInfo() {
  //     const response = await axios({
  //       method: "get",
  //       url: "http://localhost:3000/profile",
  //       headers: {
  //         Authorization: `Bearer ${user.token}`,
  //       },
  //     });
  //     setUserInfo(response.data);
  //   }

  //   getUserInfo();
  // }, []);
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
    <section className="container">
      <div className="row">
        <div className="col-md-1 col-lg-1 col-xl-2">
          <DinamicSidebar />
        </div>
        <div className="col-md-11 col-lg-7 col-xl-7">
          <UserCard userInfo={userInfo} />
          <TweetList />
        </div>
        <div className="d-none d-lg-block col-md-4 col-xl-3">
          <StaticSidebar />
        </div>
      </div>
    </section>
  );
}

export default Profile;

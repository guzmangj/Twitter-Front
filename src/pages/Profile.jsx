import StaticSidebar from "../components/sidebar/StaticSidebar";
import DinamicSidebar from "../components/sidebar/DinamicSidebar";
import UserCard from "../components/user/UserCard";
import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Tweet from "../components/tweet/Tweet";
import { setTweets } from "../redux/tweetSlice";

function Profile() {
  const [userInfo, setUserInfo] = useState(null);
  const user = useSelector((state) => state.user);
  const tweets = useSelector((state) => state.tweets);
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    async function getUsers() {
      const response1 = await axios({
        method: "GET",
        url: `${import.meta.env.VITE_REACT_APP_BACKEND_URL}/users/${params.id}`,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      setUserInfo(response1.data);

      const response2 = await axios({
        method: "GET",
        url: `${import.meta.env.VITE_REACT_APP_BACKEND_URL}/tweets` + `?id=${response1.data.id}`,
      });
      response2.data && dispatch(setTweets(response2.data));
    }

    getUsers();
  }, [params.id]);

  return (
    userInfo && (
      <section className="container">
        <div className="row">
          <div className="col-1 col-lg-1 col-xl-2 sidebar">
            <DinamicSidebar />
          </div>
          <div className="col-11 col-lg-7 col-xl-7 tweets">
            <UserCard userInfo={userInfo} />
            {tweets.map((tweet, index) => (
              <Tweet tweet={tweet} key={index} />
            ))}
          </div>
          <div className="d-none d-lg-block col-lg-4 col-xl-3">
            <StaticSidebar />
          </div>
        </div>
      </section>
    )
  );
}

export default Profile;

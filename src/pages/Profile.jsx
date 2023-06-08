import StaticSidebar from "../components/sidebar/StaticSidebar";
import DinamicSidebar from "../components/sidebar/DinamicSidebar";
import UserCard from "../components/user/UserCard";
import TweetList from "../components/tweet/TweetList";

function Profile() {
  return (
    <section className="container">
      <div className="row">
        <div className="col-md-1 col-lg-1 col-xl-2">
          <DinamicSidebar />
        </div>
        <div className="col-md-11 col-lg-7 col-xl-7">
          <UserCard />
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

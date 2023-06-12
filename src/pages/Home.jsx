import DinamicSidebar from "../components/sidebar/DinamicSidebar";
import StaticSidebar from "../components/sidebar/StaticSidebar";
import NewTweet from "../components/tweet/NewTweet";
import TweetList from "../components/tweet/TweetList";

function Home() {
  return (
    <>
      <div className="container m-auto">
        <div className="row">
          <div className="col-1 col-lg-1 col-xl-2 sidebar">
            <DinamicSidebar />
          </div>
          <div className="col-11 col-lg-7 col-xl-7 tweets">
            <NewTweet />
            <TweetList />
          </div>
          <div className="d-none d-lg-block col-lg-4 col-xl-3">
            <StaticSidebar />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

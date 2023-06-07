import DinamicSidebar from "../components/sidebar/DinamicSidebar";
import StaticSidebar from "../components/sidebar/StaticSidebar";
import NewTweet from "../components/tweet/NewTweet";

function Home() {
  return (
    <>
      <div className="row">
        <div className="col-md-1 col-lg-1 col-xl-2">
          <DinamicSidebar />
        </div>
        <div className="col-md-11 col-lg-7 col-xl-7">
          <NewTweet />
        </div>
        <div className="d-none d-lg-block col-md-4 col-xl-3">
          <StaticSidebar />
        </div>
      </div>
    </>
  );
}

export default Home;

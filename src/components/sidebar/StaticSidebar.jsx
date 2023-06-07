function StaticSidebar() {
  return (
    <aside className="position-fixed sidebarTotal">
      <div className="my-4" style={{ wordWrap: "break-word" }}>
        <div className="bg-body-tertiary p-4 rounded-4 mb-3">
          <div className="mb-3">
            <h3 className="fw-bold fs-5">What's happening</h3>
          </div>
          <div className="mb-3">
            <p className="m-0 fw-light">Programming - Trending</p>
            <p className="m-0 fs-6 fw-bold">#MongoVsSequelize</p>
            <p className="m-0">97.5K Tweets</p>
          </div>
          <div className="mb-3">
            <p className="m-0 fw-light">Entertainment · Trending</p>
            <p className="m-0 fs-6 fw-bold">#StarWars</p>
            <p className="m-0">97.5K Tweets</p>
          </div>
          <div>
            <p className="m-0 fw-light">News · Trending</p>
            <p className="m-0 fs-6 fw-bold">#LifeInMars</p>
            <p className="m-0">97.5K Tweets</p>
          </div>
        </div>
        <div className="bg-body-tertiary p-4 rounded-4">
          <div className="mb-3">
            <h3 className="fw-bold fs-5">Who to follow</h3>
          </div>
          <div className="d-flex">
            <div>
              <img
                src="https://twirpz.files.wordpress.com/2015/06/twitter-avi-gender-balanced-figure.png?w=640"
                alt="Profile picture default"
                style={{ width: "40px", height: "40px" }}
                className="rounded-circle m-0 mt-1"
              />
            </div>
            <div className="mb-3 flex-fill mx-2">
              <dl className="m-0 fs-6 fw-bold">Hack Academy</dl>
              <dd className="m-0">@HackAcademyDev</dd>
            </div>
            <div className="mb-3 d-flex align-items-center">
              <button
                type="submit"
                className="btn btn-login rounded-pill"
                style={{ backgroundColor: "var(--color-principal)" }}
              >
                Follow
              </button>
            </div>
          </div>
          <div className="d-flex">
            <div>
              <img
                src="https://twirpz.files.wordpress.com/2015/06/twitter-avi-gender-balanced-figure.png?w=640"
                alt="Profile picture default"
                style={{ width: "40px", height: "40px" }}
                className="rounded-circle m-0 mt-1"
              />
            </div>
            <div className="mb-3 flex-fill mx-2">
              <dl className="m-0 fs-6 fw-bold">Java Script</dl>
              <dd className="m-0">@JavaScript</dd>
            </div>
            <div className="mb-3 d-flex align-items-center">
              <button
                type="submit"
                className="btn btn-login rounded-pill"
                style={{ backgroundColor: "var(--color-principal)" }}
              >
                Follow
              </button>
            </div>
          </div>
          <div className="d-flex">
            <div>
              <img
                src="https://twirpz.files.wordpress.com/2015/06/twitter-avi-gender-balanced-figure.png?w=640"
                alt="Profile picture default"
                style={{ width: "40px", height: "40px" }}
                className="rounded-circle m-0 mt-1"
              />
            </div>
            <div className="mb-3 flex-fill mx-2">
              <dl className="m-0 fs-6 fw-bold">MongoDB</dl>
              <dd className="m-0">@MongoDB</dd>
            </div>
            <div className="mb-3 d-flex align-items-center">
              <button
                type="submit"
                className="btn btn-login rounded-pill"
                style={{ backgroundColor: "var(--color-principal)" }}
              >
                Follow
              </button>
            </div>
          </div>
          <div className="d-flex">
            <div>
              <img
                src="https://twirpz.files.wordpress.com/2015/06/twitter-avi-gender-balanced-figure.png?w=640"
                alt="Profile picture default"
                style={{ width: "40px", height: "40px" }}
                className="rounded-circle m-0 mt-1"
              />
            </div>
            <div className="mb-3 flex-fill mx-2">
              <dl className="m-0 fs-6 fw-bold">Node.js</dl>
              <dd className="m-0">@nodejs</dd>
            </div>
            <div className="mb-3 d-flex align-items-center">
              <button
                type="submit"
                className="btn btn-login rounded-pill"
                style={{ backgroundColor: "var(--color-principal)" }}
              >
                Follow
              </button>
            </div>
          </div>
          <div className="d-flex">
            <div>
              <img
                src="https://twirpz.files.wordpress.com/2015/06/twitter-avi-gender-balanced-figure.png?w=640"
                alt="Profile picture default"
                style={{ width: "40px", height: "40px" }}
                className="rounded-circle m-0 mt-1"
              />
            </div>
            <div className="mb-3 flex-fill mx-2">
              <dl className="m-0 fs-6 fw-bold">MDN Web Docs</dl>
              <dd className="m-0">@MozDevNet</dd>
            </div>
            <div className="mb-3 d-flex align-items-center">
              <button
                type="submit"
                className="btn btn-login rounded-pill"
                style={{ backgroundColor: "var(--color-principal)" }}
              >
                Follow
              </button>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default StaticSidebar;

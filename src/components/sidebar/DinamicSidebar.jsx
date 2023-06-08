import { Link } from "react-router-dom";
import TwitterLogo from "../../assets/twitter-logo.svg";
import HomeLogo from "../../assets/home.svg";
import ProfileLogo from "../../assets/profile.svg";
import Write from "../../assets/write.svg";
import Dropdown from "react-bootstrap/Dropdown";
import "./DinamicSidebar.css";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/userSlice";

function DinamicSidebar() {
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();
  console.log(user);
  return (
    <>
      <div className="position-fixed">
        <div className="my-3 mb-md-0">
          <div className="my-3 mb-md-0">
            <Link
              to="/home"
              className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
            >
              <div>
                <img className="mb-3 mx-3" src={TwitterLogo} alt="Twitter Logo" />
              </div>
            </Link>
          </div>
          <div className="nav nav-pills flex-column mb-auto">
            <Link to="/home" id="homeHover" className="py-2">
              <div className="nav-item d-flex align-items-center  mx-3 fs-5">
                <img
                  src={HomeLogo}
                  alt="Logo Home"
                  width={23}
                  height={23}
                  className="sidebarIcon me-3"
                />
                <span className="sidebarText">Home</span>
              </div>
            </Link>
          </div>
          <div>
            <Link to={`/profile/${user.id}`} id="profileHover" className="py-2">
              <div className="nav-item d-flex align-items-center mx-3 fs-5">
                <img src={ProfileLogo} alt="Profile Logo" className="sidebarIcon me-3" />
                <span className="sidebarText">Profile</span>
              </div>
            </Link>
          </div>
        </div>
        <div>
          <Link to="/home">
            <button
              id="tweetButton"
              className="btn btn-login rounded-pill py-2 fs-5 fw-bold mt-2 py-2"
            >
              <span className="sidebarText">Tweet</span>
              <img src={Write} alt="Tweet write" className="d-none tweetImage me-3" />
            </button>
          </Link>
        </div>

        <div className="sidebarTotal position-fixed" id="logoutButton">
          <div className="d-flex justify-content-center align-items-center">
            <img
              src={
                user.image.includes("https")
                  ? user.image
                  : `${import.meta.env.VITE_IMAGE_CLOUD_DIRECTION}/${user.image}`
              }
              alt="User avatar"
              width="40"
              height="40"
              className="rounded-circle me-2 "
            />

            <div className="userText flex-fill">
              <p className="m-0 fw-bold ">
                {user.firstname} {user.lastname}
              </p>
              <p className="m-0 ">
                <small>@{user.username}</small>
              </p>
            </div>
            <Dropdown>
              <Dropdown.Toggle variant="transparent" id="dropdown-basic"></Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="/" onClick={() => dispatch(logout())}>
                  Log out
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
    </>
  );
}

export default DinamicSidebar;

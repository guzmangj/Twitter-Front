import { Link } from "react-router-dom";
import TwitterLogo from "../../assets/twitter-logo.svg";
import HomeLogo from "../../assets/home.svg";
import ProfileLogo from "../../assets/profile.svg";
import Write from "../../assets/write.svg";
import Dropdown from "react-bootstrap/Dropdown";
import "./DinamicSidebar.css";
import { useSelector } from "react-redux";

function DinamicSidebar() {
  const user = useSelector((state) => state.user);
  console.log(user);
  return (
    <>
      <div className="bg-white d-flex flex-column justify-content-end bg-light position-fixed">
        <div>
          <div className="my-3 mb-md-0">
            <Link
              to="/home"
              className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
            >
              <img className="mb-3 mx-3" src={TwitterLogo} alt="Twitter Logo" />
            </Link>
          </div>
          <ul className="nav nav-pills flex-column mb-auto">
            <Link to="/home" id="homeHover" className="py-2">
              <li className="nav-item d-flex align-items-center  mx-3 fs-5">
                <img
                  src={HomeLogo}
                  alt="Logo Home"
                  width={23}
                  height={23}
                  className="sidebarIcon me-3"
                />
                <span className="sidebarText">Home</span>
              </li>
            </Link>
            <Link to={`/profile/${user.id}`} id="profileHover" className="py-2">
              <li className="nav-item d-flex align-items-center mx-3 fs-5">
                <img src={ProfileLogo} alt="Profile Logo" className="sidebarIcon me-3" />
                <span className="sidebarText">Profile</span>
              </li>
            </Link>

            <Link to="/home">
              <button
                id="tweetButton"
                className="btn btn-login rounded-pill py-2 fs-5 fw-bold mt-2 py-2"
              >
                <span className="sidebarText">Tweet</span>
                <img src={Write} alt="Tweet write" className="d-none tweetImage me-3" />
              </button>
            </Link>
          </ul>
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
                <Dropdown.Item href="/">Log out</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
    </>
  );
}

export default DinamicSidebar;

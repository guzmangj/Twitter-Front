import { Link } from "react-router-dom";
import TwitterLogo from "../../assets/twitter-logo.svg";
import HomeLogo from "../../assets/home.svg";
import ProfileLogo from "../../assets/profile.svg";
import Dropdown from "react-bootstrap/Dropdown";
import "./DinamicSidebar.css";
import axios from "axios";
import { useState, useEffect } from "react";

function DinamicSidebar() {
  const [userData, setUserData] = useState("");

  useEffect(() => {
    async function getUserData() {
      const response = await axios({
        method: "get",
        url: "http://localhost:3000/users",
      });
      setUserData(response.data);
    }
    getUserData();
  }, [userData]);

  return (
    <>
      <div className="bg-white d-flex flex-column flex-shrink-0 p-3 bg-light ">
        <div className="my-3 mb-md-0">
          <a
            href="/"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
          >
            <img className="mb-3 mx-3" src={TwitterLogo} alt="Twitter Logo" />
          </a>
        </div>
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item d-flex align-items-center py-2 px-3" id="homeHover">
            <img src={HomeLogo} alt="Logo Home" width={23} height={23} className="sidebarIcon" />
            <Link to="#" className="fs-5 mx-3">
              Home
            </Link>
          </li>
          <li className="nav-item d-flex align-items-center py-2 px-3" id="profileHover">
            <div>
              <img src={ProfileLogo} alt="Profile Logo" className="sidebarIcon" />
            </div>
            <Link to="#" className="fs-5 mx-3">
              Profile
            </Link>
          </li>

          <button className="btn btn-login rounded-pill my-2 fs-5 fw-bold py-2">Tweet</button>
        </ul>
        <div id="logoutButton">
          <div className="d-flex justify-content-center align-items-center">
            <img
              src="https://github.com/mdo.png"
              alt="User avatar"
              width="40"
              height="40"
              className="rounded-circle me-2 "
            />

            <div className=" flex-fill">
              <p className="m-0 fw-bold ">Nombre de usuario</p>
              <p className="m-0 ">@Username</p>
            </div>
            <Dropdown>
              <Dropdown.Toggle variant="transparent" id="dropdown-basic"></Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="/action-1">Action</Dropdown.Item>
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

import "./Login.css";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setToken } from "../redux/userSlice";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await axios({
      method: "post",
      url: `${process.env.REACT_APP_BACKEND_URL}/login`,
      data: {
        email: emailValue,
        password: passwordValue,
      },
    });
    response.data && dispatch(setToken(response.data));
    navigate("/");
  }

  return (
    <>
      <main style={{ background: "var(--color-secundario)" }}>
        <div className="container d-flex justify-content-center align-items-center vh-100">
          <div className="row" style={{ width: "100%", height: "75%" }}>
            <div className="d-none d-md-flex col-md-5 col-lg-7 loginSide rounded-start">
              <div className="container d-grid">
                <span style={{ margin: "2rem 0rem 0rem 1rem" }}>
                  <i className="fa-brands fa-twitter fa-2xl" style={{ color: "#ffffff" }}></i>
                </span>
                <h2
                  className="align-self-end justify-self-start"
                  style={{ color: "#ffffff", fontSize: "24px", margin: "0 0rem 2rem 1rem" }}
                >
                  Hey! Nice to see you again 🥰
                </h2>
              </div>
            </div>
            <div className="login-container col-sm-12 col-md-7 col-lg-5 bg-white rounded-end d-flex align-items-center">
              <div className="container mx-4">
                <form onSubmit={handleSubmit}>
                  <div className="container p-2 mb-2">
                    <h1 style={{ color: "#353535", fontSize: "24px", marginBottom: "8px" }}>
                      Login
                    </h1>
                    <p style={{ color: "#000000", fontWeight: "350", fontSize: "12px" }}>
                      Ready to start using Twitter?
                    </p>
                  </div>
                  <div className="form-group mb-3">
                    <input
                      type="text"
                      name="email"
                      className="form-control"
                      id="email"
                      placeholder="Email"
                      value={emailValue}
                      onChange={(event) => setEmailValue(event.target.value)}
                      style={{ fontSize: "12px", padding: "8px 12px 8px 12px", color: "gray" }}
                    />
                  </div>
                  <div className="form-group mb-3">
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      id="password"
                      placeholder="Password"
                      value={passwordValue}
                      onChange={(event) => setPasswordValue(event.target.value)}
                      style={{ fontSize: "12px", padding: "8px 12px 8px 12px" }}
                    />
                  </div>
                  <button type="submit" className="btn btn-login rounded-pill w-100 mb-4">
                    Login
                  </button>
                  <div className="d-flex justify-content-center">
                    <p style={{ color: "#353535", fontWeight: "350", fontSize: "12px" }}>
                      Don't have an account?
                    </p>
                    <Link
                      style={{
                        color: "var(--color-principal)",
                        fontWeight: "300",
                        fontSize: "12px",
                        textDecoration: "none",
                        paddingLeft: "3px",
                      }}
                      to="/register"
                    >
                      Sign up
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Login;

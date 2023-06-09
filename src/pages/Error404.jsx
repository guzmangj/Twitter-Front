import React from "react";
import { NavLink } from "react-router-dom";

function Error404() {
  return (
    <main
      className="d-flex align-items-center justify-content-center"
      style={{ backgroundColor: "var(--color-principal)", height: "100vh" }}
    >
      <div className="text-center">
        <p style={{ color: "white", fontWeight: "300", fontSize: "1.5rem" }}>
          Hmm...esta página no existe 🤔
        </p>
        <NavLink to={"/"} style={{ textDecoration: "none" }}>
          <button
            type="submit"
            className="btn btn-login rounded-pill p-1"
            style={{
              width: "90px",
              color: "var(--color-principal)",
              backgroundColor: "rgb(255, 255, 255)",
            }}
          >
            Home
          </button>
        </NavLink>
      </div>
    </main>
  );
}

export default Error404;

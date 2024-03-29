import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Landing.css";
import { fetchCsrfToken } from "../../features/csrfSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import { autoLogin } from "../../features/authSlice";

const Landing: React.FC = () => {
  return (
    <div className="background">
      <div className="landing-container">
        <div className="landing-card">
          <h1>
            {" "}
            Welcome High Roller! Please either login or register below to start
            the fun!
          </h1>
          <ul>
            <Link to="/registration" className="button-link">
              <button className="landing-button">Register</button>
            </Link>
            <Link to="/login" className="button-link">
              <button className="landing-button">Login</button>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Landing;

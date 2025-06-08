import React from "react";
import notFoundImage from "../assets/images/notFoundImage.jpg";
import { Link } from "react-router";

const NotFoundPage = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${notFoundImage})`,
      }}
    >
      <div
        className="hero-overlay "
        style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
      ></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-4xl md:text-5xl font-bold">
            Page Not Found!
          </h1>
          <p className="mb-5">The page you are looking for doesn't exist.</p>
          <Link to={"/"}>
            <button className="btn btn-warning  md:btn-lg">
              Go to Homepage
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;

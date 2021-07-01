import React from "react";
import "./Landing.css";
import Toprated from "../Toprated/Toprated";
import NewMovies from "../Newmovies/Newmovies";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="landing">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Best Feedback of the website */}
        <div className="banner-text md:">
          <h1 className="banner-text-head">DISCOVER</h1>
          <h2 className="banner-text-para">The madness</h2>
        </div>
        <div className="row col-12 mx-0 mt-10 px-2">
          <div className="col-6">
            <Link to="/future">
              <NewMovies />
            </Link>
          </div>
          <div className="col-6">
            <Link to="/toprated">
              <Toprated />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;

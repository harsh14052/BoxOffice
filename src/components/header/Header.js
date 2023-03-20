import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="headerLeft">
        <Link to="/BoxOffice">
          <img
            className="header_icon"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq52J_bwxCYWRkMuj9no5_DE83R0kZ8eawAA&usqp=CAU"
            alt="BoxOfficeLogo"
          ></img>
        </Link>
        <Link to="/movies/popular" style={{ textDecoration: "none" }}>
          <span>Popular</span>
        </Link>
        <Link to="/movies/top_rated" style={{ textDecoration: "none" }}>
          <span>TopRated</span>
        </Link>
        <Link to="/movies/upcoming" style={{ textDecoration: "none" }}>
          <span>Upcoming</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;

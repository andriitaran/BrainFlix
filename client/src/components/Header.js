import React, { Component } from "react";
import "../styles/main.css";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo/Logo-brainflix.svg";
import Search from "../assets/Icons/SVG/Icon-search.svg";
import UploadIcon from "../assets/Icons/SVG/Icon-upload.svg";

export default class Header extends Component {
  render() {
    return (
      <section className="header">
        <div className="header__container">
          <Link to="/">
            <div className="header__container--logo">
              <img src={Logo} alt="brainflix logo" />
            </div>
          </Link>
          <div className="header-wrapper">
            <div className="header__container--search">
              <input
                className="header__container--search-input"
                type="text"
                placeholder="Search"
              />
              <img
                className="header__container--search-img"
                src={Search}
                alt="search"
              />
            </div>

            <Link to="/upload">
              <button className="header__container--upload">
                <img src={UploadIcon} height="16px" alt="upload icon" />
                UPLOAD
              </button>
            </Link>
            <div className="header__container--avatar"></div>
          </div>
        </div>
      </section>
    );
  }
}

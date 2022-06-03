import React from "react";
import "./navbar.scss";
import { BsBell, BsPlus } from "react-icons/bs";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__right">
        <p className="navbar__right-text">
          לקוחות<span className="navbar__right-num">7</span>
        </p>

        <button className="navbar__right-button">
          הוסף לקוח <BsPlus />
        </button>
      </div>
      <div className="navbar__notification">
        <BsBell className="navbar__notification-icon" />
        <span className="navbar__notification-num">3</span>
      </div>
    </div>
  );
};

export default Navbar;

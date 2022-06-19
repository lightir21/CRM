import React, { useState } from "react";
import style from "./navbar.module.scss";
import { BsBell, BsPlus } from "react-icons/bs";
import NewCustomer from "../newCustomer/NewCustomer";
import { logout } from "../../utils/redux/logoutSlice.js";
import { useDispatch } from "react-redux";

const Navbar = ({ setIsPopupOpen, isPopupOpen }) => {
  const dispatch = useDispatch();

  return (
    <div className={style.navbar}>
      <div className={style.right}>
        <button className={style.text} onClick={() => dispatch(logout())}>
          התנתק
        </button>
        <p className={style.text}>
          לקוחות<span className={style.num}>7</span>
        </p>

        <button
          className={style.button}
          onClick={() => setIsPopupOpen(!isPopupOpen)}
        >
          הוסף לקוח <BsPlus />
        </button>
      </div>
      <div className={style.notification}>
        <BsBell className={style.icon} />
        <span className={style.num}>3</span>
      </div>
    </div>
  );
};

export default Navbar;

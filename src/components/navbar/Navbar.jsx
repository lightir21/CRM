import React, { useState } from "react";
import style from "./navbar.module.scss";
import { BsBell, BsPlus } from "react-icons/bs";
import NewCustomer from "../newCustomer/NewCustomer";
const Navbar = ({ setIsPopupOpen, isPopupOpen }) => {
  return (
    <div className={style.navbar}>
      <div className={style.right}>
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

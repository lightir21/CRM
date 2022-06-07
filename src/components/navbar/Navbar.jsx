import React from "react";
import style from "./navbar.module.scss";
import { BsBell, BsPlus } from "react-icons/bs";
const Navbar = () => {
  return (
    <div className={style.navbar}>
      <div className={style.right}>
        <p className={style.text}>
          לקוחות<span className={style.num}>7</span>
        </p>

        <button className={style.button}>
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

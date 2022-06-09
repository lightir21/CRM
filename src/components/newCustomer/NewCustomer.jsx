import React from "react";
import style from "./newCustomer.module.scss";
import { AiOutlineClose } from "react-icons/ai";

const NewCustomer = ({ setIsPopupOpen, isPopupOpen }) => {
  return (
    <div className={style.container}>
      <div className={style.innerContainer}>
        <div
          className={style.exitBtn}
          onClick={() => {
            setIsPopupOpen(!isPopupOpen);
          }}
        >
          <AiOutlineClose className={style.icon} />
        </div>
      </div>
    </div>
  );
};

export default NewCustomer;

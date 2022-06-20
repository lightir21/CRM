import React from "react";
import style from "./newCustomer.module.scss";
import { AiOutlineClose } from "react-icons/ai";

const NewCustomer = ({ setIsPopupOpen, isPopupOpen }) => {
  return (
    <div
      className={style.container}
      onClick={(e) => {
        if (e.target.className === "newCustomer_container__YRu1z") {
          setIsPopupOpen(!isPopupOpen);
        }
      }}
    >
      <div className={style.innerContainer}>
        <div
          className={style.exitBtn}
          onClick={() => {
            setIsPopupOpen(!isPopupOpen);
          }}
        >
          <AiOutlineClose className={style.icon} />
        </div>

        <form className={style.form}>
          <div className={style.inputBox}>
            <label htmlFor="fullName">שם מלא</label>
            <input type="text" id="fullName" />
          </div>

          <div className={style.inputBox}>
            <label htmlFor="id"> תעודת זהות</label>
            <input type="text" id="id" />
          </div>

          <div className={style.inputBox}>
            <label htmlFor="phone">פלאפון</label>
            <input type="phone" id="phone" />
          </div>

          <div className={style.inputBox}>
            <label htmlFor="email">אימייל</label>
            <input type="email" id="email" />
          </div>

          <div className={style.inputBox}>
            <label htmlFor="date">תאריך לידה</label>
            <input type="date" id="date" value="2022-06-10" />
          </div>

          <div className={style.inputBox}>
            <label htmlFor="employment">שכיר/עצמאי</label>
            <select id="employment">
              <option value="שכיר">שכיר</option>
              <option value="עצמאי">עצמאי</option>
            </select>
          </div>

          <div className={style.inputBox}>
            <label htmlFor="smoke">מעשן/לא מעשן</label>
            <select id="smoke">
              <option value="מעשן">מעשן</option>
              <option value="לא מעשן">לא מעשן</option>
            </select>
          </div>

          <div className={style.inputBox}>
            <label htmlFor="health">מצב בריאותי</label>
            <select id="health">
              <option value="תקין">תקין</option>
              <option value="לא תקין">לא תקין</option>
            </select>
          </div>

          <button className={style.btn}>הקמת לקוח חדש</button>
        </form>
      </div>
    </div>
  );
};

export default NewCustomer;

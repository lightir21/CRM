import React from "react";
import style from "./signup.module.scss";

const Signup = ({ setIsRegistered }) => {
  return (
    <div className={style.signup}>
      <h2>הרשם למערכת</h2>
      <form className={style.form}>
        <div className={style.box}>
          <label htmlFor="email" className={style.label}>
            אימייל
          </label>
          <input type="email" required name="email" className={style.input} />
        </div>
        <div className={style.box}>
          <label htmlFor="password" className={style.label}>
            סיסמא
          </label>
          <input
            type="password"
            required
            name="password"
            className={style.input}
          />
        </div>
        <div className={style.box}>
          <label htmlFor="confirmPassword" className={style.label}>
            אישור סיסמא
          </label>
          <input
            type="password"
            required
            name="confirmPassword"
            className={style.input}
          />
        </div>
      </form>
      <button className={style.btn} onClick={() => setIsRegistered(true)}>
        יש לך משתמש? הכנס
      </button>
    </div>
  );
};

export default Signup;

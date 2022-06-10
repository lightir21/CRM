import React from "react";
import style from "./login.module.scss";

const Login = ({ setIsRegistered }) => {
  return (
    <div className={style.login}>
      <h1>ברוך הבא למערכת</h1>
      <h2>הזן את פרטיך</h2>
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
      </form>
      <button className={style.btn} onClick={() => setIsRegistered(false)}>
        אין לך משתמש? הרשם
      </button>
    </div>
  );
};

export default Login;

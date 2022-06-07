import React from "react";
import style from "./home.module.scss";

const Home = () => {
  return (
    <div className={style.home}>
      <div className={style.container}>
        <div className={style.login}>
          <h1>ברוך הבא למערכת</h1>
          <h2>הזן את פרטיך</h2>
          <form className={style.form}>
            <div className={style.box}>
              <label htmlFor="email" className={style.label}>
                אימייל
              </label>
              <input
                type="email"
                required
                name="email"
                className={style.input}
              />
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
        </div>
      </div>
    </div>
  );
};

export default Home;

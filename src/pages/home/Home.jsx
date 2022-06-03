import React from "react";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <div className="home__login">
          <h1>ברוך הבא למערכת</h1>
          <h2>הזן את פרטיך</h2>
          <form className="home__login-form">
            <div className="home__login-form-box">
              <label htmlFor="email" className="home__login-form-label">
                אימייל
              </label>
              <input
                type="email"
                required
                name="email"
                className="home__login-form-input"
              />
            </div>
            <div className="home__login-form-box">
              <label htmlFor="password" className="home__login-form-label">
                סיסמא
              </label>
              <input
                type="password"
                required
                name="password"
                className="home__login-form-input"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;

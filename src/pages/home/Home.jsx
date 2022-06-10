import React, { useState } from "react";
import Login from "../../components/login/Login";
import Signup from "../../components/signup/Signup";
import style from "./home.module.scss";

const Home = () => {
  const [isRegistered, setIsRegistered] = useState(true);
  return (
    <div className={style.home}>
      <div className={style.container}>
        {isRegistered ? (
          <Login setIsRegistered={setIsRegistered} />
        ) : (
          <Signup setIsRegistered={setIsRegistered} />
        )}
      </div>
    </div>
  );
};

export default Home;

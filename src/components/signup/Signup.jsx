import React, { useState } from "react";
import style from "./signup.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { signUpUser } from "../../utils/redux/signupSlice";

const initialState = {
  email: "",
  password: "",
  confirmPassword: "",
};

const Signup = ({ setIsRegistered }) => {
  const [values, setValues] = useState(initialState);
  const dispatch = useDispatch();
  const { signup } = useSelector((state) => state.signup);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setValues({ ...values, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const { email, password, confirmPassword } = values;

    dispatch(signUpUser({ email, password, confirmPassword }));
    setValues(initialState);
    e.target.reset();
  };

  return (
    <div className={style.signup}>
      <h2>הרשם למערכת</h2>
      <form className={style.form} onSubmit={onSubmit}>
        <div className={style.box}>
          <label htmlFor="email" className={style.label}>
            אימייל
          </label>
          <input
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
            type="password"
            required
            name="confirmPassword"
            className={style.input}
          />
        </div>
        <button className={style.btn}>הרשם</button>
      </form>
      <button className={style.btn} onClick={() => setIsRegistered(true)}>
        יש לך משתמש? הכנס
      </button>
    </div>
  );
};

export default Signup;

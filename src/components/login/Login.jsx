import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../utils/redux/loginSlice";
import { logout } from "../../utils/redux/logoutSlice.js";
import style from "./login.module.scss";

const initialState = {
  email: "",
  password: "",
};

const Login = ({ setIsRegistered }) => {
  const [values, setValues] = useState(initialState);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setValues({ ...values, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const { email, password } = values;
    dispatch(loginUser({ email, password }));

    setValues(initialState);
    e.target.reset();
  };

  return (
    <div className={style.login}>
      <h1>ברוך הבא למערכת</h1>
      <h2>הזן את פרטיך</h2>
      <form className={style.form} onSubmit={onSubmit}>
        <div className={style.box}>
          <label htmlFor="email" className={style.label}>
            אימייל
          </label>
          <input
            type="email"
            required
            name="email"
            className={style.input}
            onChange={handleChange}
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
            onChange={handleChange}
          />
        </div>
        <button className={style.loginBtn}>כנס</button>
      </form>
      <button className={style.btn} onClick={() => setIsRegistered(false)}>
        אין לך משתמש? הרשם
      </button>
      <button onClick={() => dispatch(logout())}>התנתק</button>
    </div>
  );
};

export default Login;

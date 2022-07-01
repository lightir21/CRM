import React, { useState } from "react";
import style from "./newCustomer.module.scss";
import { AiOutlineClose } from "react-icons/ai";
import {
  createNewCustomer,
  queryForCustomer,
} from "../../utils/firebase/firebase";
import { useDispatch, useSelector } from "react-redux";
import { async } from "@firebase/util";
import { setCurrentCustomer } from "../../utils/redux/customersSlice";

const initialState = {
  fullName: "",
  id: null,
  phone: null,
  email: "",
  date: null,
  employment: "שכיר",
  smoke: "מעשן",
  health: "תקין",
  admin: "",
};

const NewCustomer = ({ setIsPopupOpen, isPopupOpen }) => {
  const [values, setValues] = useState(initialState);

  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.currentUser.currentUser);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues({ ...values, [name]: value, admin: currentUser.uid });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    await createNewCustomer(currentUser, values);
    const { id } = values;
    let customerId = await queryForCustomer(currentUser, id);

    console.log(customerId, id);
    dispatch(setCurrentCustomer(customerId));
  };

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

        <form className={style.form} onSubmit={onSubmit}>
          <div className={style.inputBox}>
            <label htmlFor="fullName">שם מלא</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              onChange={handleChange}
            />
          </div>

          <div className={style.inputBox}>
            <label htmlFor="id"> תעודת זהות</label>
            <input type="text" id="id" name="id" onChange={handleChange} />
          </div>

          <div className={style.inputBox}>
            <label htmlFor="phone">פלאפון</label>
            <input
              type="phone"
              id="phone"
              name="phone"
              onChange={handleChange}
            />
          </div>

          <div className={style.inputBox}>
            <label htmlFor="email">אימייל</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
            />
          </div>

          <div className={style.inputBox}>
            <label htmlFor="date">תאריך לידה</label>
            <input type="date" id="date" name="date" onChange={handleChange} />
          </div>

          <div className={style.inputBox}>
            <label htmlFor="employment">שכיר/עצמאי</label>
            <select id="employment" name="employment" onChange={handleChange}>
              <option value="שכיר">שכיר</option>
              <option value="עצמאי">עצמאי</option>
            </select>
          </div>

          <div className={style.inputBox}>
            <label htmlFor="smoke">מעשן/לא מעשן</label>
            <select id="smoke" name="smoke" onChange={handleChange}>
              <option value="מעשן">מעשן</option>
              <option value="לא מעשן">לא מעשן</option>
            </select>
          </div>

          <div className={style.inputBox}>
            <label htmlFor="health">מצב בריאותי</label>
            <select id="health" name="health" onChange={handleChange}>
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

import React from "react";
import style from "./customerInfo.module.scss";
import { AiOutlineEdit } from "react-icons/ai";
import { useState } from "react";

const CustomerInfo = ({ currentCustomer }) => {
  const { fullName, date, id, employment, health, smoke } = currentCustomer;
  const [isEditOn, setIsEditOn] = useState(false);
  const [values, setValues] = useState({
    fullName,
    date,
    id,
    employment,
    health,
    smoke,
  });

  const ageCalculator = (date) => {
    if (!date) return;
    const newDate = new Date(date.replaceAll("-", ","));

    let diff_ms = Date.now() - newDate.getTime();
    let age_dt = new Date(diff_ms);
    return Math.abs(age_dt.getUTCFullYear() - 1970);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues({ ...values, [name]: value });
  };

  return (
    <div className={style.customerInfo}>
      {isEditOn ? (
        <form>
          <input
            type="text"
            name="fullName"
            className={style.name}
            placeholder={fullName}
            onChange={handleChange}
          ></input>
          <div className={style.inputBox}>
            <label htmlFor="id" className={style.idLabel}>
              תז:
            </label>
            <input
              name="id"
              className={style.id}
              placeholder={id}
              onChange={handleChange}
            ></input>
          </div>
          <hr />
          <input
            type="date"
            className={style.birthDate}
            defaultValue={date}
            onChange={handleChange}
          ></input>
          <p className={style.age}>
            גיל: <strong>{ageCalculator(date)}</strong>
          </p>
          <input
            type="text"
            className={style.address}
            placeholder="הזן כתובת"
            onChange={handleChange}
          ></input>
          <p className={style.gender}>מין: זכר</p>
          <hr />
          <div className={style.inputBox}>
            <select
              id="employment"
              name="employment"
              defaultValue={employment}
              onChange={handleChange}
            >
              <option value="שכיר">שכיר</option>
              <option value="עצמאי">עצמאי</option>
            </select>
          </div>
          <div className={style.inputBox}>
            <select
              id="smoke"
              name="smoke"
              defaultValue={smoke}
              onChange={handleChange}
            >
              <option value="מעשן">מעשן</option>
              <option value="לא מעשן">לא מעשן</option>
            </select>
          </div>
          <div className={style.inputBox}>
            <select
              id="health"
              name="health"
              defaultValue={health}
              onChange={handleChange}
            >
              <option value="תקין">תקין</option>
              <option value="לא תקין">לא תקין</option>
            </select>
          </div>
        </form>
      ) : (
        <>
          <h2 className={style.name}>{fullName}</h2>
          <p className={style.id}>תז: {id}</p>
          <hr />
          <p className={style.birthDate}>
            ת.לידה: <strong>{date}</strong>
          </p>
          <p className={style.age}>
            גיל: <strong>{ageCalculator(date)}</strong>
          </p>
          <p className={style.address}>
            כתובת: <strong>הנביאים 7 טבריה</strong>
          </p>
          <p className={style.gender}>מין: זכר</p>
          <hr />
          <p className={style.status}>
            סטטוס עבודה: <strong>{employment}</strong>
          </p>
          <p className={style.smoke}>
            סטטוס עישון: <strong>{smoke}</strong>
          </p>
          <p className={style.health}>
            מצב בריאותי: <strong>{health}</strong>
          </p>
          <AiOutlineEdit
            className={style.editIcon}
            onClick={() => setIsEditOn(true)}
          />
        </>
      )}
    </div>
  );
};

export default CustomerInfo;

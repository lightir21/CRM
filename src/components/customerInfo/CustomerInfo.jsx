import React from "react";
import style from "./customerInfo.module.scss";

const CustomerInfo = ({ currentCustomer }) => {
  const { fullName, date, id, employment, health, smoke } = currentCustomer;

  const ageCalculator = (date) => {
    if (!date) return;
    const newDate = new Date(date.replaceAll("-", ","));

    let diff_ms = Date.now() - newDate.getTime();
    let age_dt = new Date(diff_ms);
    return Math.abs(age_dt.getUTCFullYear() - 1970);
  };

  return (
    <div className={style.customerInfo}>
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
    </div>
  );
};

export default CustomerInfo;

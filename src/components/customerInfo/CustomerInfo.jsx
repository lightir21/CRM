import React from "react";
import style from "./customerInfo.module.scss";

const CustomerInfo = () => {
  return (
    <div className={style.customerInfo}>
      <h2 className={style.name}>ישראל ישראלי</h2>
      <p className={style.id}>תז:322055321</p>
      <hr />
      <p className={style.birthDate}>
        ת.לידה: <strong>15/15/1991</strong>
      </p>
      <p className={style.age}>
        גיל: <strong>31</strong>
      </p>
      <p className={style.address}>
        כתובת: <strong>הנביאים 7 טבריה</strong>
      </p>
      <p className={style.gender}></p>
      <hr />
      <p className={style.status}>
        סטטוס עבודה: <strong>שכיר</strong>
      </p>
      <p className={style.smoke}>
        סטטוס עישון: <strong>לא מעשן</strong>
      </p>
      <p className={style.health}>
        מצב בריאותי: <strong>תקין</strong>
      </p>
    </div>
  );
};

export default CustomerInfo;

import React from "react";
import style from "./customerInfo.module.scss";

const CustomerInfo = () => {
  return (
    <div className={style.customerInfo}>
      <h2 className={style.name}>ישראל ישראלי</h2>
      <p className={style.id}>תז:322055321</p>
      <hr />
    </div>
  );
};

export default CustomerInfo;

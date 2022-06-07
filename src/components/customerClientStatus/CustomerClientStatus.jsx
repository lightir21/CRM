import React from "react";
import { BsBell } from "react-icons/bs";
import style from "./customerClientStatus.module.scss";

const CustomerClientStatus = () => {
  return (
    <div className={style.clientStatus}>
      <div className={style.box}>
        <BsBell className={style.icon} />
        <span className={style.num}>4</span>
      </div>
      <label htmlFor="status">סטטוס לקוח:</label>
      <select name="status" id="status" className={style.select}>
        <option value="פעיל">פעיל</option>
        <option value="מבוטל">מבוטל</option>
        <option value="ליד">ליד</option>
      </select>
    </div>
  );
};

export default CustomerClientStatus;

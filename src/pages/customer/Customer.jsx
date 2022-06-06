import React from "react";
import "./customer.scss";
import data from "../../mockData/clientsData.json";
import { BsBell, BsPlus } from "react-icons/bs";

const Customer = () => {
  return (
    <div className="customer">
      <div className="customer__tabs">
        <p className="customer__tabs active">ישראל ישראלי</p>
      </div>
      <div className="customer__right">
        <div className="customer__clientStatus">
          <BsBell />
          <label for="status">סטטוס לקוח:</label>
          <select name="status" id="status" className="customer__status-select">
            <option value="פעיל">פעיל</option>
            <option value="מבוטל">מבוטל</option>
          </select>
        </div>
        <div className="customer__contact">
          <h3 className="customer__subtitles">פרטי לקוח</h3>
        </div>
      </div>
      <div className="customer__left"></div>
    </div>
  );
};

export default Customer;

import React from "react";
import "./customer.scss";
import data from "../../mockData/clientsData.json";
import {
  BsBell,
  BsPlus,
  BsWhatsapp,
  BsTelephone,
  BsEnvelope,
  BsPeople,
} from "react-icons/bs";

const Customer = () => {
  return (
    <div className="customer">
      <div className="customer__tabs">
        <p className="customer__tab active">ישראל ישראלי</p>
        <p className="customer__tab ">אביחי ישראלי</p>
      </div>
      <div className="customer__container">
        <div className="customer__right">hi</div>
        <div className="customer__left">
          <div className="customer__clientStatus">
            <div className="customer__clientStatus-box">
              <BsBell className="customer__clientStatus-icon" />
              <span className="customer__clientStatus-icon-num">4</span>
            </div>
            <label htmlFor="status">סטטוס לקוח:</label>
            <select
              name="status"
              id="status"
              className="customer__clientStatus-select"
            >
              <option value="פעיל">פעיל</option>
              <option value="מבוטל">מבוטל</option>
            </select>
          </div>
          <div className="customer__contact">
            <h3 className="customer__subtitles">פרטי לקוח</h3>
            <div className="customer__phone">
              <BsWhatsapp />
              <BsTelephone />
              0521348654
            </div>
            <div className="customer__email">
              <BsEnvelope />
              israel.i@israel.com
            </div>
          </div>
          <div className="customer__contacts">
            <h3 className="customer__subtitles">
              לקוחות משויכים <BsPeople />
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;

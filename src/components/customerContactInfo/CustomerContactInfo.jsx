import React from "react";
import style from "./customerContactInfo.module.scss";
import { BsWhatsapp, BsTelephone, BsEnvelope } from "react-icons/bs";

const CustomerContactInfo = ({ currentCustomer }) => {
  const { phone, email } = currentCustomer;

  return (
    <div className={style.contact}>
      <h3 className={style.subtitles}>פרטי התקשורת</h3>
      <div className={style.phone}>
        <BsWhatsapp className={style.whatsapp} />
        <BsTelephone className={style.phoneIcon} />
        {phone}
      </div>
      <div className={style.email}>
        <BsEnvelope className={style.emailIcon} />
        {email}
      </div>
    </div>
  );
};

export default CustomerContactInfo;

import React from "react";
import style from "./customerContacts.module.scss";
import {
  BsBell,
  BsPlus,
  BsWhatsapp,
  BsTelephone,
  BsEnvelope,
  BsPeople,
} from "react-icons/bs";

const CustomerContacts = () => {
  return (
    <div className={style.contacts}>
      <h3 className={style.subtitles}>
        לקוחות משויכים <BsPeople />
      </h3>
      <p className={style.text}>אביחי ישראלי</p>
    </div>
  );
};

export default CustomerContacts;

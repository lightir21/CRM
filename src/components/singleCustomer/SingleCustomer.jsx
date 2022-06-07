import React from "react";
import style from "./singleCustomer.module.scss";
import { AiOutlineMail } from "react-icons/ai";
import { TbBrandTelegram } from "react-icons/tb";

const SignleCustomer = ({ data }) => {
  const { details, id } = data;
  const { name, clientId, addrress, email, phone } = details;

  if (data) {
    return (
      <div className={style.singleCustomer}>
        <div className={style.name}>
          <p>{name}</p>
        </div>
        <div className={style.id}>
          <p>{clientId}</p>
        </div>
        <div className={style.address}>
          <p>{addrress}</p>
        </div>
        <div className={style.email}>
          <p> {email} </p>
        </div>
        <div className={style.phone}>
          <p>{phone}</p>
        </div>
        <div className={style.iconBox}>
          <AiOutlineMail className={style.icon} />
          <TbBrandTelegram className={style.icon} />
        </div>
        <button className={style.button}>מעבר לדף לקוח</button>
      </div>
    );
  }
};

export default SignleCustomer;

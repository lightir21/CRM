import React from "react";
import "./singleCustomer.scss";
import { AiOutlineMail } from "react-icons/ai";
import { TbBrandTelegram } from "react-icons/tb";

const SignleCustomer = ({ data }) => {
  const { details, id } = data;
  const { name, clientId, addrress, email, phone } = details;

  if (data) {
    return (
      <div className="singleCustomer">
        <div className="singleCustomer__item-name">
          <p>{name}</p>
        </div>
        <div className="singleCustomer__item-id">
          <p>{clientId}</p>
        </div>
        <div className="singleCustomer__item-address">
          <p>{addrress}</p>
        </div>
        <div className="singleCustomer__item-email">
          <p> {email} </p>
        </div>
        <div className="singleCustomer__item-phone">
          <p>{phone}</p>
        </div>
        <div className="singleCustomer__icon-box">
          <AiOutlineMail className="singleCustomer__icon" />
          <TbBrandTelegram className="singleCustomer__icon" />
        </div>
        <button className="singleCustomer__button">מעבר לדף לקוח</button>
      </div>
    );
  }
};

export default SignleCustomer;

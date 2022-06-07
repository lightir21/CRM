import React from "react";
import style from "./customer.module.scss";
import data from "../../mockData/clientsData.json";
import {
  BsBell,
  BsPlus,
  BsWhatsapp,
  BsTelephone,
  BsEnvelope,
  BsPeople,
} from "react-icons/bs";
import CustomerClientStatus from "../../components/customerClientStatus/CustomerClientStatus";
import CustomerContactInfo from "../../components/customerContactInfo/CustomerContactInfo";
import CustomerContacts from "../../components/customerContacs/CustomerContacts";
import CustomerInfo from "../../components/customerInfo/CustomerInfo";
import CustomerNotes from "../../components/customerNotes/CustomerNotes";
import CustomerCommonQuestions from "../../components/customerCommonQuestions/CustomerCommonQuestions";
import CustomerCommonMsgs from "../../components/customerCommonMsgs/CustomerCommonMsgs";

const Customer = () => {
  return (
    <div className={style.customer}>
      <div className={style.tabs}>
        <p className={`${style.tab} ${style.active}`}>ישראל ישראלי</p>
        <p className={style.tab}>אביחי ישראלי</p>
      </div>
      <div className={style.container}>
        <div className={style.right}>
          <CustomerInfo />
        </div>
        <div className={style.left}>
          <CustomerClientStatus />
          <CustomerContactInfo />
          <CustomerContacts />
        </div>
      </div>
      <CustomerCommonQuestions />
      <CustomerCommonMsgs />
    </div>
  );
};

export default Customer;

import React from "react";
import style from "./singleCustomer.module.scss";
import { AiOutlineMail } from "react-icons/ai";
import { TbBrandTelegram } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { queryForCustomer } from "../../utils/firebase/firebase";
import { setCurrentCustomer } from "../../utils/redux/customersSlice";

const SignleCustomer = ({ data, setIsCustomerOpen }) => {
  const { date, email, id, phone, fullName } = data;
  const currentUser = useSelector((state) => state.currentUser.currentUser);
  const dispatch = useDispatch();

  if (data) {
    return (
      <div className={style.singleCustomer}>
        <div className={style.name}>
          <p>{fullName}</p>
        </div>
        <div className={style.id}>
          <p>{id}</p>
        </div>
        <div className={style.address}>
          <p></p>
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
        <button
          className={style.button}
          onClick={() => {
            queryForCustomer(currentUser, id).then((customer) => {
              dispatch(setCurrentCustomer(customer));
              setIsCustomerOpen(true);
            });
          }}
        >
          מעבר לדף לקוח
        </button>
      </div>
    );
  }
};

export default SignleCustomer;

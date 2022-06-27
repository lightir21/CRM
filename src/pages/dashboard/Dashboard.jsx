import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomerList from "../../components/customerList/CustomerList";
import Filter from "../../components/filter/Filter";
import Navbar from "../../components/navbar/Navbar";
import NewCustomer from "../../components/newCustomer/NewCustomer";
import { queryForCustomer } from "../../utils/firebase/firebase";
import style from "./dashboard.module.scss";
import data from "../../mockData/clientsData.json";
import { setCustomers } from "../../utils/redux/customersSlice.js";

const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCustomers(data));
  }, []);

  dispatch(setCustomers(data));

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const currentUser = useSelector((state) => state.currentUser.currentUser);
  return (
    <div className={style.dashboard}>
      <Navbar setIsPopupOpen={setIsPopupOpen} isPopupOpen={isPopupOpen} />
      <Filter />
      <CustomerList />
      <button onClick={() => queryForCustomer(currentUser, "123123")}>
        click me for user
      </button>
      {isPopupOpen && (
        <NewCustomer
          setIsPopupOpen={setIsPopupOpen}
          isPopupOpen={isPopupOpen}
        />
      )}
    </div>
  );
};

export default Dashboard;

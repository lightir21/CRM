import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomerList from "../../components/customerList/CustomerList";
import Filter from "../../components/filter/Filter";
import Navbar from "../../components/navbar/Navbar";
import NewCustomer from "../../components/newCustomer/NewCustomer";
import {
  getCustomersList,
  queryForCustomer,
  updateCustomer,
} from "../../utils/firebase/firebase";
import style from "./dashboard.module.scss";
import data from "../../mockData/clientsData.json";
import { setCustomers } from "../../utils/redux/customersSlice.js";
import Customer from "../customer/Customer";

const Dashboard = () => {
  const dispatch = useDispatch();

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isCustomerOpen, setIsCustomerOpen] = useState(false);

  const currentUser = useSelector((state) => state.currentUser.currentUser);
  // const customerId = useSelector((state) => state.customers.currentCustomerId);

  useEffect(() => {
    getCustomersList(currentUser).then((customers) =>
      dispatch(setCustomers(customers))
    );
  }, []);

  return (
    <div className={style.dashboardContainer}>
      <div className={style.dashboard}>
        <Navbar setIsPopupOpen={setIsPopupOpen} isPopupOpen={isPopupOpen} />
        <Filter />
        <CustomerList setIsCustomerOpen={setIsCustomerOpen} />
        {isPopupOpen && (
          <NewCustomer
            setIsPopupOpen={setIsPopupOpen}
            isPopupOpen={isPopupOpen}
          />
        )}
      </div>
      {isCustomerOpen && <Customer className={style.customer} />}
    </div>
  );
};

export default Dashboard;

import React, { useState } from "react";
import CustomerList from "../../components/customerList/CustomerList";
import Filter from "../../components/filter/Filter";
import Navbar from "../../components/navbar/Navbar";
import NewCustomer from "../../components/newCustomer/NewCustomer";
import style from "./dashboard.module.scss";

const Dashboard = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(true);
  return (
    <div className={style.dashboard}>
      <Navbar setIsPopupOpen={setIsPopupOpen} isPopupOpen={isPopupOpen} />
      <Filter />
      <CustomerList />
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

import React from "react";
import CustomerList from "../../components/customerList/CustomerList";
import Filter from "../../components/filter/Filter";
import Navbar from "../../components/navbar/Navbar";
import style from "./dashboard.module.scss";

const Dashboard = () => {
  return (
    <div className={style.dashboard}>
      <Navbar />
      <Filter />
      <CustomerList />
    </div>
  );
};

export default Dashboard;

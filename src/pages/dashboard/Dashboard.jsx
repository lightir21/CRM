import React from "react";
import CustomerList from "../../components/customerList/CustomerList";
import Filter from "../../components/filter/Filter";
import Navbar from "../../components/navbar/Navbar";
import "./dashboard.scss";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Navbar />
      <Filter />
      <CustomerList />
    </div>
  );
};

export default Dashboard;

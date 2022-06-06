import React from "react";
import "./customerList.scss";
import data from "../../mockData/clientsData.json";
import SingleCustomer from "../singleCustomer/SingleCustomer";

const CustomerList = () => {
  console.log(data);
  return (
    <div className="customerList">
      {data &&
        data.clients.map((customer) => {
          return <SingleCustomer data={customer} key={customer.id} />;
        })}
    </div>
  );
};

export default CustomerList;
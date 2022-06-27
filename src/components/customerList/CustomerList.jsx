import React from "react";
import style from "./customerList.module.scss";
import SingleCustomer from "../singleCustomer/SingleCustomer";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";

const CustomerList = () => {
  const data = useSelector((state) => state?.customers.customers.clients);
  const filteredCustomersChange = useSelector(
    (state) => state?.customers.filteredCustomersChange
  );
  console.log(filteredCustomersChange);
  const [filteredCustomers, setFilteredCustomers] = useState(data);

  useEffect(() => {
    if (filteredCustomersChange) {
      setFilteredCustomers(() => {
        return data.filter((customer) => {
          return customer.details.name.includes(filteredCustomersChange);
        });
      });
    } else {
      setFilteredCustomers(data);
    }
    console.log(filteredCustomers);
  }, [filteredCustomersChange]);

  return (
    <div className={style.customerList}>
      {filteredCustomers &&
        filteredCustomers?.map((customer) => {
          return <SingleCustomer data={customer} key={customer.id} />;
        })}
    </div>
  );
};

export default CustomerList;

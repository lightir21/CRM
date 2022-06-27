import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setFilteredCustomersChange } from "../../utils/redux/customersSlice";
import DateFilter from "../dateFilter/DateFilter";
import style from "./filter.module.scss";

const Filter = () => {
  const [isDateOpen, setIsDateOpen] = useState(true);
  const [name, setName] = useState(null);

  useEffect(() => {
    dispatch(setFilteredCustomersChange(name));
  }, [name]);

  const dispatch = useDispatch();

  return (
    <div className={style.filter}>
      <div className={style.date}>
        <DateFilter />
      </div>

      <input
        type="text"
        className={style.nameFilter}
        placeholder="הכנס שם"
        onChange={(e) => {
          return setName(e.target.value);
        }}
      />

      <button>מוצר</button>
      <button>חברה</button>
      <button>משימה</button>
      <button>מסתיים החודש</button>
      <button>שכיר</button>
      <button>סכום</button>
      <button>סטאטוס</button>
    </div>
  );
};

export default Filter;

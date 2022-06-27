import React from "react";
import { useState } from "react";
import DateFilter from "../dateFilter/DateFilter";
import style from "./filter.module.scss";

const Filter = () => {
  const [isDateOpen, setIsDateOpen] = useState(true);

  return (
    <div className={style.filter}>
      <div className={style.date}>
        <DateFilter />
      </div>

      <input type="text" className={style.nameFilter} />

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

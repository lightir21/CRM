import React from "react";
import style from "./filter.module.scss";

const Filter = () => {
  return (
    <div className={style.filter}>
      <button>חודש</button>
      <button>שם</button>
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

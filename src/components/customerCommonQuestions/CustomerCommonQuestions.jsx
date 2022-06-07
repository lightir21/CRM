import React from "react";
import style from "./customerCommonQuestions.module.scss";

const CustomerCommonQuestions = () => {
  return (
    <div className={style.container}>
      <h3 className={style.subtitles}>שאלות קבועות</h3>
      <ul className={style.list}>
        <li>האם לבטל ביטוח בשביל לחסוך בהוצאות</li>
        <li>האם כדאי להיות מבוטח בביטוח פלטינום של קופ"ח</li>
        <li>בעקבות מחלה לא יכות להתפרנס, מה ניתן לעשות</li>
      </ul>
    </div>
  );
};

export default CustomerCommonQuestions;

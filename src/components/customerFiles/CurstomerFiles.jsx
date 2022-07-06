import React from "react";
import style from "./customerFiles.module.scss";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { useState } from "react";
import CustomerFilePopup from "../customerFilePopup/CustomerFilePopup";

const CurstomerFiles = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className={style.container}>
      <h3 className={style.subtitles}>קבצים</h3>
      <div className={style.fileList}>
        <AiOutlinePlusSquare
          className={style.addFile}
          onClick={() => setIsPopupOpen(true)}
        />
      </div>
      {isPopupOpen && <CustomerFilePopup setIsPopupOpen={setIsPopupOpen} />}
    </div>
  );
};

export default CurstomerFiles;

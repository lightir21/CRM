import React from "react";
import style from "./customerFiles.module.scss";
import { AiOutlinePlusSquare } from "react-icons/ai";

const CurstomerFiles = () => {
  return (
    <div className={style.container}>
      <h3 className={style.subtitles}>קבצים</h3>
      <div className={style.fileList}>
        <label htmlFor="input">
          <AiOutlinePlusSquare className={style.addFile} />
          <input type="file" id="input" />
        </label>
      </div>
    </div>
  );
};

export default CurstomerFiles;

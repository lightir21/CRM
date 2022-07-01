import React from "react";
import style from "./customerFiles.module.scss";

const CurstomerFiles = () => {
  return (
    <div className={style.container}>
      <h3 className={style.subtitles}>קבצים</h3>
      <div className={style.fileList}></div>
    </div>
  );
};

export default CurstomerFiles;

import React, { useState } from "react";
import style from "./customerFilePopup.module.scss";

const CustomerFilePopup = ({ setIsPopupOpen }) => {
  const [dragActive, setDragActive] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const file = e.target[0].files[0];
    console.log(file);
  };

  const handleDrag = function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = function (e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      // at least one file has been dropped so do something
      // handleFiles(e.dataTransfer.files);
      console.log(e.dataTransfer.files[0]);
    }
  };

  const handleChange = function (e) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      // at least one file has been selected so do something
      // handleFiles(e.target.files);

      console.log(e.dataTransfer.files[0]);
    }
  };

  return (
    <form
      className={style.container}
      onSubmit={onSubmit}
      onDragEnter={handleDrag}
    >
      <label
        htmlFor="input"
        className={!dragActive ? style.input_label : style.input_label_active}
      >
        הוסף לכאן קובץ
        <input
          type="file"
          id="input"
          className={style.input}
          onChange={handleChange}
        />
      </label>
      {dragActive && (
        <div
          className={style.drag_file_element}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        ></div>
      )}
      <div className={style.note}>
        <label htmlFor="note">הוסף הערה</label>
        <input type="text" className={style.text} multiple={false} />
      </div>
      <button className={style.send}>שלח</button>
      <button className={style.exit} onClick={() => setIsPopupOpen(false)}>
        x
      </button>
    </form>
  );
};

export default CustomerFilePopup;

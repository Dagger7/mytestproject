import React from 'react';
import style from './Dialogs.module.scss';
import DialogContacts from "./DialogContacts/DialogContacts";
import {Route, Routes} from "react-router-dom";
import DialogMessages from "./DialogContacts/DialogMessages";
import DividerComponent from "../../Components/DividerComponent";


const Dialogs = () => {
  return (
    <div className={style.dialogsContainer}>
      <DialogContacts />
      <DividerComponent />
      <Routes>
        <Route
          path="1"
          element={<DialogMessages />}
        />
        <Route
          path="2"
          element={<DialogMessages />}
        />
        <Route
          path="3"
          element={<DialogMessages />}
        />
      </Routes>
    </div>
  );
};

export default Dialogs;
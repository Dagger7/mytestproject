import React from 'react';
import style from './Content.module.scss';
import Profile from "./Profile/Profile";
import Dialogs from "./Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";

const Content = () => {
  return (
      <div className={style.contentContainer}>
        <Routes>
          <Route
            index
            element={<Profile />}
          />
          <Route
            path="/profile/*"
            element={<Profile />}
          />
          <Route
            path="/dialogs/*"
            element={<Dialogs />}
          />
        </Routes>
      </div>
  );
};

export default Content;
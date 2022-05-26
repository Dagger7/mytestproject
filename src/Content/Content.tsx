import React from 'react';
import style from './Content.module.scss';
import Profile from "./Profile/Profile";
import Dialogs from "./Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";


const Content = () => {
  return (
    <BrowserRouter>
      <div className={style.contentContainer}>
        <Routes>
          <Route path="/profile" element={<Profile />}/>
          <Route path="/dialogs" element={<Dialogs />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Content;
import React from 'react';
import style from './Dialogs.module.scss';
import DialogContacts from "./DialogContacts/DialogContacts";
import {Route, Routes} from "react-router-dom";
import DialogMessages from "./DialogContacts/DialogMessages";
import DividerComponent from "../../Components/DividerComponent";

const Dialogs = () => {

  let routeDialogMessagesData = [
    {
      path:'1',
      element:<DialogMessages />
    },
    {
      path:'2',
      element:<DialogMessages />
    },
    {
      path:'3',
      element:<DialogMessages />
    }
  ];

  let dialogContactData = [
    {
      id: 1,
      avatar:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Vanamo_Logo.svg/1200px-Vanamo_Logo.svg.png',
      link:'1',
      name:'Dmitry'
    },
    {
      id: 2,
      avatar:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Vanamo_Logo.svg/1200px-Vanamo_Logo.svg.png',
      link:'2',
      name:'Andrew'
    },
    {
      id: 3,
      avatar:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Vanamo_Logo.svg/1200px-Vanamo_Logo.svg.png',
      link:'3',
      name:'Alex'
    },
    {
      id: 4,
      avatar:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Vanamo_Logo.svg/1200px-Vanamo_Logo.svg.png',
      link:'4',
      name:'Vlad'
    },
    {
      id: 5,
      avatar:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Vanamo_Logo.svg/1200px-Vanamo_Logo.svg.png',
      link:'5',
      name:'Sasha'
    }
  ];

  let routeDialogMessagesComponents = routeDialogMessagesData.map((el) => <Route path={el.path} element={el.element} />)

  return (
    <div className={style.dialogsContainer}>
      <DialogContacts dialogContactData={dialogContactData} />
      <DividerComponent />
      <Routes>
        {routeDialogMessagesComponents}
        {/*<Route*/}
        {/*  path="1"*/}
        {/*  element={<DialogMessages />}*/}
        {/*/>*/}
        {/*<Route*/}
        {/*  path="2"*/}
        {/*  element={<DialogMessages />}*/}
        {/*/>*/}
        {/*<Route*/}
        {/*  path="3"*/}
        {/*  element={<DialogMessages />}*/}
        {/*/>*/}
      </Routes>
    </div>
  );
};

export default Dialogs;
import React from 'react';
import styles from './App.module.scss';
import Header from "./Header/Header";
import Content from "./Content/Content";
import Nav from "./Nav/Nav";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.contentContainer}>
        <BrowserRouter>
          <Nav />
          <Content />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;

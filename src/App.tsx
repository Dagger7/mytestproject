import React from 'react';
import styles from './App.module.scss';
import Header from "./Header/Header";
import Content from "./Content/Content";
import Nav from "./Nav/Nav";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.contentContainer}>
        <Nav />
        <Content />
      </div>
    </div>
  );
}

export default App;

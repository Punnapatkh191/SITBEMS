import ReactDOM from 'react-dom';
import React,{ useEffect, useState } from "react";
import styles from '../App.module.css';
import { BrowserRouter, Routes, Route,Link, NavLink } from "react-router-dom";




function Home() {
    return (
        <body>
           
      
        <div className={styles.welcomebox}>
    <div className={styles.roomName}><p style={{fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 300, fontSize: 'xxx-large', color: 'white', marginTop:'5%'}}>Welcome to Doo-SIT</p></div>
    <div className={styles.roomName}><p style={{fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 300, fontSize: 'x-large', color: 'white'}}>Web application for providing information and assistance through virtual locations.</p></div>
    <Link to={"./firstfloor"}>
  <button className={styles.buttonL29}> Start </button>
  </Link >
  <a href="https://www.sit.kmutt.ac.th/" target="_blank">
  <button className={styles.buttonL28}> Go to SIT website </button></a>
    </div>
          
        </body>
      );
}


export default Home;


import ReactDOM from 'react-dom';
import React,{ useEffect, useState } from "react";
import styles from './App.module.css';
import { BrowserRouter, Routes, Route,Link, NavLink } from "react-router-dom";
import Navbar from "./Navbar"
import Firstfloor from "./component/firstfloor"
import Secondfloor from "./component/secondfloor"
import Thirdfloor from "./component/thirdfloor"
import Fourthfloor from "./component/fourthfloor"
import Home from "./component/home"




function App() {
 
    
    return (
        <body classname={styles.backgroundImage} style={{backgroundImage: `url('bg.png')`, height:'970px'}}>
           
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/firstfloor" element={<Firstfloor />} />
          <Route path="/secondfloor" element={<Secondfloor />} />
          <Route path="/thirdfloor" element={<Thirdfloor />} />
          <Route path="/fourthfloor" element={<Fourthfloor />} />
        </Routes>
        
          
        </body>
      );
}


export default App;


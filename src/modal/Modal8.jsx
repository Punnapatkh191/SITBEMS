import React, { useEffect, useState } from 'react';
import styles from '../App.module.css';
import{db}  from '../firebase';



const Modal8 = ({ open, onClose }) => {
    const [postData, setPostData] = useState("");
    useEffect(() => {
        db.collection("roomPower").doc('10003').get().then(doc => {
            const newData = doc.data();
            setPostData(newData);
        });
    }, []);
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    
    const time = `${current.getHours()}:${current.getMinutes()}:${current.getSeconds()}`;

  if (!open) return null;


  return (
    <div onClick={onClose} className={styles.modalPop}>
      <div className={styles.modalContent} onClick={(e) => {
          e.stopPropagation();
        }}>
        <span className={styles.close} onClick={onClose}>×</span>
        <div className={styles.roomName}><p style={{fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 300, fontSize: 'xx-large', color: 'white'}}>{postData.roomName}</p></div>
        <img src="/tr3.jpg" className={styles.roomPic} width={'auto'} height={'550px'}/>
        <a href="https://webapp3.sit.kmutt.ac.th/booking/web/day.php?year=2022&month=11&day=14&area=2&room=17" target="_blank">
  <button className={styles.buttonL28}> Click here to see room schedule </button>
</a>
        <div className={styles.gridContainer}>
          <div className={styles.gridItem}>
            <div><p style={{fontFamily: 'Arial, Helvetica, sans-serif', marginLeft: '5%', fontWeight: 300, fontSize: 'medium', color: 'white'}}>Amount of People</p>
              <p style={{fontFamily: 'Arial, Helvetica, sans-serif', marginLeft: '25%', fontWeight: 300, fontSize: 'xx-large', color: 'white'}}>{postData.peopleAmount} peoples</p>
              <p style={{fontFamily: 'Arial, Helvetica, sans-serif', marginLeft: '5%', fontWeight: 300, fontSize: 'x-small', color: 'white'}}>Update {date} {time}</p></div>                                       
          </div>
          <div className={styles.gridItem}>
            <div><p style={{fontFamily: 'Arial, Helvetica, sans-serif', marginLeft: '5%', fontWeight: 300, fontSize: 'medium', color: 'white'}}>Temperature</p>
              <p style={{fontFamily: 'Arial, Helvetica, sans-serif', marginLeft: '25%', fontWeight: 300, fontSize: 'xx-large', color: 'white'}}>{postData.temperature} C</p>
              <p style={{fontFamily: 'Arial, Helvetica, sans-serif', marginLeft: '5%', fontWeight: 300, fontSize: 'x-small', color: 'white'}}>Update {date} {time}</p></div>
          </div>
          <div className={styles.gridItem}>
            <div><p style={{fontFamily: 'Arial, Helvetica, sans-serif', marginLeft: '5%', fontWeight: 300, fontSize: 'medium', color: 'white'}}>Electric Power</p>
              <p style={{fontFamily: 'Arial, Helvetica, sans-serif', marginLeft: '25%', fontWeight: 300, fontSize: 'xx-large', color: 'white'}}>{postData.powerUsage} kWh</p>
              <p style={{fontFamily: 'Arial, Helvetica, sans-serif', marginLeft: '5%', fontWeight: 300, fontSize: 'x-small', color: 'white'}}>Update {date} {time}</p></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal8;
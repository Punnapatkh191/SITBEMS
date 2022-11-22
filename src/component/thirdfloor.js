import ReactDOM from 'react-dom';
import React,{ useEffect, useState } from "react";
import styles from '../App.module.css';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
  } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Doughnut } from 'react-chartjs-2';
import faker from 'faker';
import{db}  from '../firebase';
import Modal20 from '../modal/Modal20';
import Modal21 from '../modal/Modal21';
import Modal22 from '../modal/Modal22';
import Modal23 from '../modal/Modal23';
import Modal24 from '../modal/Modal24';
import Modal25 from '../modal/Modal25';

ChartJS.register(
    ArcElement,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const options1 = {
    display:false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: 'white'
       }
      }
      }
    }
    ;
  
  const options2 = {
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: 'white'
       }
      }
      },
      responsive: true,
        scales: {
          maintainAspectRatio: false,
          yAxes:{
              grid: {
                  drawBorder: true,
                  color: '#FFFFFF',
              },
              ticks:{
                  beginAtZero: true,
                  color: 'white',
                  fontSize: 12,
              }
          },
          xAxes: {
              grid: {
                  drawBorder: true,
                  color: '#FFFFFF',
              },
              ticks:{
                  beginAtZero: true,
                  color: 'white',
                  fontSize: 12,
              }
          },
      },
      }
    ;
    
  const labels = ['19/11/22', '20/11/22', '21/11/22', '22/11/22', '23/11/22'];
const current = new Date();
const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

const time = `${current.getHours()}:${current.getMinutes()}:${current.getSeconds()}`;

function Thirdfloor() {
    const [openModal20, setOpenModal20] = useState(false);
    const [openModal21, setOpenModal21] = useState(false);
    const [openModal22, setOpenModal22] = useState(false);
    const [openModal23, setOpenModal23] = useState(false);
    const [openModal24, setOpenModal24] = useState(false);
    const [openModal25, setOpenModal25] = useState(false);
    const [roomName, setRoomName] = useState([]);
    const [powerUsage, setPowerUsage] = useState([]);
    useEffect(() => {
        db.collection("totalElectricity").get().then((querySnapshot) => {
            
            setRoomName([])
            setPowerUsage([])
            querySnapshot.forEach(element => {
                if (element.id > 30000 && element.id < 40000){
                    var data = element.data();
                    setRoomName(arr => [...arr , data.roomName]);
                    setPowerUsage(asd => [...asd , data.powerUsage]);
                }
                
            });
        })
    }, []);

    const data2 = {
      labels,
      datasets: [
        {
          label: 'Meeting 1',
          data: labels.map(() => faker.datatype.number({ min: 0, max: 4500 })),
          borderColor: 'rgb(18, 18, 88, 1)',
          backgroundColor: 'rgba(18, 18, 88, 1)',
        },
        {
          label: 'Meeting 2',
          data: labels.map(() => faker.datatype.number({ min: 0, max: 4500 })),
          borderColor: 'rgb(68, 78, 134, 1)',
          backgroundColor: 'rgba(68, 78, 134, 1)',
        },
        {
          label: 'Meeting 3',
          data: labels.map(() => faker.datatype.number({ min: 0, max: 4500 })),
          borderColor: 'rgb(149, 81, 150, 1)',
          backgroundColor: 'rgba(149, 81, 150, 1)',
        },
        {
          label: 'Meeting 4',
          data: labels.map(() => faker.datatype.number({ min: 0, max: 4500 })),
          borderColor: 'rgb(221, 81, 130, 1)',
          backgroundColor: 'rgba(221, 81, 130, 1)',
        },
        {
          label: 'R-Lab',
          data: labels.map(() => faker.datatype.number({ min: 0, max: 4500 })),
          borderColor: 'rgb(255, 110, 84, 1)',
          backgroundColor: 'rgba(255, 110, 84, 1)',
        },
        {
          label: 'D-Lab',
          data: labels.map(() => faker.datatype.number({ min: 0, max: 4500 })),
          borderColor: 'rgb(255, 166, 0, 1)',
          backgroundColor: 'rgba(255, 166, 0, 1)',
        },
      ],
    };
  
  const data1 = {
      labels: [...roomName],
      datasets: [
        {
          label: '# of Votes',
          data: [...powerUsage],
          backgroundColor: [
            'rgba(18, 18, 88, 1)',
            'rgba(68, 78, 134, 1)',
            'rgba(149, 81, 150, 1)',
            'rgba(221, 81, 130, 1)',
            'rgba(255, 110, 84, 1)',
            'rgba(255, 166, 0, 1)',
          ],
          borderColor: [
            'rgba(18, 18, 88, 1)',
            'rgba(68, 78, 134, 1)',
            'rgba(149, 81, 150, 1)',
            'rgba(221, 81, 130, 1)',
            'rgba(255, 110, 84, 1)',
            'rgba(255, 166, 0, 1)',
          ],
          borderWidth: 1,
        },
      ],
    };
    
    return (
      <body classname={styles.backgroundImage} style={{backgroundImage: `url('/bg.png')`}}>
          {/* <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>SITBEMS</title>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.css" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css" />
          <link rel="stylesheet" href="..\src\index.css" /> */}
          
          <main>
            <div>
              <div className={styles.container} style={{display: 'flex'}}>
                <div style={{width: '65%', marginTop:'5%'}}>
                  <img src="/3floor.png" className={styles.res1} />  
                  <div className={styles.constraint} style={{marginTop: '-52%', marginLeft: '42%'}}>
                    <button className={styles.roundButton} id="myBtn" onClick={() => setOpenModal20(true)}>
                      <div className={styles.roundButtonCircle}>
                        <span className={styles.roundButton} />
                      </div>
                    </button>
                    <div id="myModal" className={styles.modal}></div>
                    <Modal20 
      open={openModal20} 
      onClose={() => setOpenModal20(false)} />
                  </div>
                  <div className={styles.constraint} style={{marginTop: '-5.8%', marginLeft: '50%'}}>
                  <button className={styles.roundButton} id="myBtn" onClick={() => setOpenModal21(true)}>
                      <div className={styles.roundButtonCircle}>
                        <span className={styles.roundButton} />
                      </div>
                    </button>
                    <div id="myModal" className={styles.modal}></div>
                    <Modal21 
      open={openModal21} 
      onClose={() => setOpenModal21(false)} />
                  </div>
                  <div className={styles.constraint} style={{marginTop: '-10%', marginLeft: '84%'}}>
                  <button className={styles.roundButton} id="myBtn" onClick={() => setOpenModal22(true)}>
                      <div className={styles.roundButtonCircle}>
                        <span className={styles.roundButton} />
                      </div>
                    </button>
                    <div id="myModal" className={styles.modal}></div>
                    <Modal22 
      open={openModal22} 
      onClose={() => setOpenModal22(false)} />
                  </div>
                  <div className={styles.constraint} style={{marginTop: '11%', marginLeft: '75%'}}>
                  <button className={styles.roundButton} id="myBtn" onClick={() => setOpenModal23(true)}>
                      <div className={styles.roundButtonCircle}>
                        <span className={styles.roundButton} />
                      </div>
                    </button>
                    <div id="myModal" className={styles.modal}></div>
                    <Modal23 
      open={openModal23} 
      onClose={() => setOpenModal23(false)} />
                  </div>
                  <div className={styles.constraint} style={{marginTop: '-6%', marginLeft: '85%'}}>
                  <button className={styles.roundButton} id="myBtn" onClick={() => setOpenModal24(true)}>
                      <div className={styles.roundButtonCircle}>
                        <span className={styles.roundButton} />
                      </div>
                    </button>
                    <div id="myModal" className={styles.modal}></div>
                    <Modal24 
      open={openModal24} 
      onClose={() => setOpenModal24(false)} />
                  </div>
                  <div className={styles.constraint} style={{marginTop: '23%', marginLeft: '43%'}}>
                  <button className={styles.roundButton} id="myBtn" onClick={() => setOpenModal25(true)}>
                      <div className={styles.roundButtonCircle}>
                        <span className={styles.roundButton} />
                      </div>
                    </button>
                    <div id="myModal" className={styles.modal}></div>
                    <Modal25
      open={openModal25} 
      onClose={() => setOpenModal25(false)} />
                  </div></div>
                <div style={{flexGrow: 1}}>
                  <div className={styles.infobox}  style={{ marginTop:'10%'}}>
                    <div style={{display: 'flex', height: '60px'}}>
                      <div style={{width: '20%', padding: '3%', background: 'white'}}>
                        <p style={{fontFamily: 'Arial, Helvetica, sans-serif', marginTop: '-3%', fontWeight: 'bold'}}>{date}</p>
                      </div>
                      <div style={{flexGrow: 1, padding: '3%', marginLeft: '-2%', background: 'white', textAlign: 'center'}}><p style={{fontFamily: 'Arial, Helvetica, sans-serif', marginTop: '-2%', fontWeight: 100, fontSize: 'large'}}>School of Information Technology Floor 3</p>
                      </div>          
                    </div>
                    <div style={{display: 'flex', height: '40px'}}>
                      <div style={{borderColor: 'white', width: '25%', padding: '3%', background: 'rgba(63, 105, 214, 1)'}}>
                        <p style={{fontFamily: 'Arial, Helvetica, sans-serif', marginTop: '3%', fontWeight: 'bold', color: 'white'}}>{time}</p>
                      </div>
                      <div style={{flexGrow: 1, padding: '3%', borderWidth: 2, marginLeft: '-2%', borderColor: 'white', background: 'rgba(63, 105, 214, 1)', textAlign: 'center'}}><p style={{fontFamily: 'Arial, Helvetica, sans-serif', marginTop: '-1%', fontWeight: 300, fontSize: 'x-large', color: 'white'}}>Amount of electricity used</p>
                      </div>        
                    </div>
                    <div className={styles.doughnutChartContainer}>
                        <Doughnut data={data1} classname={styles.donut} options={options1} />
                    </div>
                    <div style={{height: '5%', background: 'white', width: '100%', textAlign: 'center', marginTop: '5%'}}><p style={{fontFamily: 'Arial, Helvetica, sans-serif', marginTop: '5%', fontWeight: 300, fontSize: 'x-large', color: 'black'}}> Daily Consumed Energy Accumulation</p></div>
                        <Line options={options2} data={data2} />
                  </div>   
                </div>
              </div>
            </div></main>
        </body>
      );
}


export default Thirdfloor;
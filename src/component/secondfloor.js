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
import Modal11 from '../modal/Modal11';
import Modal12 from '../modal/Modal12';
import Modal13 from '../modal/Modal13';
import Modal14 from '../modal/Modal14';
import Modal15 from '../modal/Modal15';
import Modal16 from '../modal/Modal16';
import Modal17 from '../modal/Modal17';
import Modal18 from '../modal/Modal18';
import Modal19 from '../modal/Modal19';

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

function Secondfloor() {
    const [openModal11, setOpenModal11] = useState(false);
    const [openModal12, setOpenModal12] = useState(false);
    const [openModal13, setOpenModal13] = useState(false);
    const [openModal14, setOpenModal14] = useState(false);
    const [openModal15, setOpenModal15] = useState(false);
    const [openModal16, setOpenModal16] = useState(false);
    const [openModal17, setOpenModal17] = useState(false);
    const [openModal18, setOpenModal18] = useState(false);
    const [openModal19, setOpenModal19] = useState(false);

    const [roomName, setRoomName] = useState([]);
    const [powerUsage, setPowerUsage] = useState([]);
    useEffect(() => {
        db.collection("totalElectricity").get().then((querySnapshot) => {
            
            setRoomName([])
            setPowerUsage([])
            querySnapshot.forEach(element => {
                if (element.id > 20000 && element.id < 30000){
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
          label: '{I-Lab}',
          data: labels.map(() => faker.datatype.number({ min: 0, max: 4500 })),
          borderColor: 'rgb(18, 18, 88, 1)',
          backgroundColor: 'rgba(18, 18, 88, 1)',
        },
        {
          label: 'LF Room',
          data: labels.map(() => faker.datatype.number({ min: 0, max: 4500 })),
          borderColor: 'rgb(0, 63, 92, 1)',
          backgroundColor: 'rgba(0, 63, 92, 1)',
        },
        {
          label: 'Dean Office',
          data: labels.map(() => faker.datatype.number({ min: 0, max: 4500 })),
          borderColor: 'rgb(47, 75, 124, 1)',
          backgroundColor: 'rgba(47, 75, 124, 1)',
        },
        {
          label: 'Reception Hall',
          data: labels.map(() => faker.datatype.number({ min: 0, max: 4500 })),
          borderColor: 'rgb(102, 81, 145, 1)',
          backgroundColor: 'rgba(102, 81, 145, 1)',
        },
        {
          label: 'ELCS',
          data: labels.map(() => faker.datatype.number({ min: 0, max: 4500 })),
          borderColor: 'rgb(160, 81, 149, 1)',
          backgroundColor: 'rgba(160, 81, 149, 1)',
        },
        {
          label: 'IR-Office',
          data: labels.map(() => faker.datatype.number({ min: 0, max: 4500 })),
          borderColor: 'rgb(212, 80, 135, 1)',
          backgroundColor: 'rgba(212, 80, 135, 1)',
        },
        {
          label: 'ESRC',
          data: labels.map(() => faker.datatype.number({ min: 0, max: 4500 })),
          borderColor: 'rgb(212, 80, 135, 1)',
          backgroundColor: 'rgba(212, 80, 135, 1)',
        },
        {
          label: 'SRM',
          data: labels.map(() => faker.datatype.number({ min: 0, max: 4500 })),
          borderColor: 'rgb(255, 124, 67, 1)',
          backgroundColor: 'rgba(255, 124, 67, 1)',
        },
        {
          label: 'Learning Space',
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
            'rgba(0, 63, 92, 1)',
            'rgba(47, 75, 124, 1)',
            'rgba(102, 81, 145, 1)',
            'rgba(160, 81, 149, 1)',
            'rgba(212, 80, 135, 1)',
            'rgba(249, 93, 106, 1)',
            'rgba(255, 124, 67, 1)',
            'rgba(255, 166, 0, 1)',
         
          ],
          borderColor: [
            'rgba(18, 18, 88, 1)',
            'rgba(0, 63, 92, 1)',
            'rgba(47, 75, 124, 1)',
            'rgba(102, 81, 145, 1)',
            'rgba(160, 81, 149, 1)',
            'rgba(212, 80, 135, 1)',
            'rgba(249, 93, 106, 1)',
            'rgba(255, 124, 67, 1)',
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
                  <img src="/2floor.png" className={styles.res1} />  
                  <div className={styles.constraint} style={{marginTop: '-37%', marginLeft: '23%'}}>
                    <button className={styles.roundButton} id="myBtn" onClick={() => setOpenModal11(true)}>
                      <div className={styles.roundButtonCircle}>
                        <span className={styles.roundButton} />
                      </div>
                    </button>
                    <div id="myModal" className={styles.modal}></div>
                    <Modal11
      open={openModal11} 
      onClose={() => setOpenModal11(false)} />
                  </div>
                  <div className={styles.constraint} style={{marginTop: '-5.5%', marginLeft: '40%'}}>
                  <button className={styles.roundButton} id="myBtn" onClick={() => setOpenModal12(true)}>
                      <div className={styles.roundButtonCircle}>
                        <span className={styles.roundButton} />
                      </div>
                    </button>
                    <div id="myModal" className={styles.modal}></div>
                    <Modal12
      open={openModal12} 
      onClose={() => setOpenModal12(false)} />
                  </div>
                  <div className={styles.constraint} style={{marginTop: '-6%', marginLeft: '60%'}}>
                  <button className={styles.roundButton} id="myBtn" onClick={() => setOpenModal13(true)}>
                      <div className={styles.roundButtonCircle}>
                        <span className={styles.roundButton} />
                      </div>
                    </button>
                    <div id="myModal" className={styles.modal}></div>
                    <Modal13
      open={openModal13} 
      onClose={() => setOpenModal13(false)} />
                  </div>
                  <div className={styles.constraint} style={{marginTop: '-6%', marginLeft: '69%'}}>
                  <button className={styles.roundButton} id="myBtn" onClick={() => setOpenModal14(true)}>
                      <div className={styles.roundButtonCircle}>
                        <span className={styles.roundButton} />
                      </div>
                    </button>
                    <div id="myModal" className={styles.modal}></div>
                    <Modal14
      open={openModal14} 
      onClose={() => setOpenModal14(false)} />
                  </div>
                  <div className={styles.constraint} style={{marginTop: '-6%', marginLeft: '77%'}}>
                  <button className={styles.roundButton} id="myBtn" onClick={() => setOpenModal15(true)}>
                      <div className={styles.roundButtonCircle}>
                        <span className={styles.roundButton} />
                      </div>
                    </button>
                    <div id="myModal" className={styles.modal}></div>
                    <Modal15
      open={openModal15} 
      onClose={() => setOpenModal15(false)} />
                  </div>
                  <div className={styles.constraint} style={{marginTop: '-6%', marginLeft: '85%'}}>
                  <button className={styles.roundButton} id="myBtn" onClick={() => setOpenModal16(true)}>
                      <div className={styles.roundButtonCircle}>
                        <span className={styles.roundButton} />
                      </div>
                    </button>
                    <div id="myModal" className={styles.modal}></div>
                    <Modal16
      open={openModal16} 
      onClose={() => setOpenModal16(false)} />
                  </div>
                  <div className={styles.constraint} style={{marginTop: '15%', marginLeft: '25%'}}>
                  <button className={styles.roundButton} id="myBtn" onClick={() => setOpenModal17(true)}>
                      <div className={styles.roundButtonCircle}>
                        <span className={styles.roundButton} />
                      </div>
                    </button>
                    <div id="myModal" className={styles.modal}></div>
                    <Modal17
      open={openModal17} 
      onClose={() => setOpenModal17(false)} />
                  </div>
                  <div className={styles.constraint} style={{marginTop: '-6%', marginLeft: '35%'}}>
                  <button className={styles.roundButton} id="myBtn" onClick={() => setOpenModal18(true)}>
                      <div className={styles.roundButtonCircle}>
                        <span className={styles.roundButton} />
                      </div>
                    </button>
                    <div id="myModal" className={styles.modal}></div>
                    <Modal18
      open={openModal18} 
      onClose={() => setOpenModal18(false)} />
                  </div>
                  <div className={styles.constraint} style={{marginTop: '-6%', marginLeft: '55%'}}>
                  <button className={styles.roundButton} id="myBtn" onClick={() => setOpenModal19(true)}>
                      <div className={styles.roundButtonCircle}>
                        <span className={styles.roundButton} />
                      </div>
                    </button>
                    <div id="myModal" className={styles.modal}></div>
                    <Modal19
      open={openModal19} 
      onClose={() => setOpenModal19(false)} />
                  </div>
                  </div>
                <div style={{flexGrow: 1}}>
                  <div className={styles.infobox}  style={{ marginTop:'10%'}}>
                    <div style={{display: 'flex', height: '60px'}}>
                      <div style={{width: '20%', padding: '3%', background: 'white'}}>
                        <p style={{fontFamily: 'Arial, Helvetica, sans-serif', marginTop: '-3%', fontWeight: 'bold'}}>{date}</p>
                      </div>
                      <div style={{flexGrow: 1, padding: '3%', marginLeft: '-2%', background: 'white', textAlign: 'center'}}><p style={{fontFamily: 'Arial, Helvetica, sans-serif', marginTop: '-2%', fontWeight: 100, fontSize: 'large'}}>School of Information Technology Floor 2</p>
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


export default Secondfloor;
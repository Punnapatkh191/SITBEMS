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
import Modal1 from '../modal/Modal1';
import{db}  from '../firebase';
import Modal2 from '../modal/Modal2';
import Modal3 from '../modal/Modal3';
import Modal4 from '../modal/Modal4';
import Modal5 from '../modal/Modal5';
import Modal6 from '../modal/Modal6';
import Modal7 from '../modal/Modal7';
import Modal8 from '../modal/Modal8';
import Modal9 from '../modal/Modal9';
import Modal10 from '../modal/Modal10';

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

function Firstfloor() {
    const [openModal1, setOpenModal1] = useState(false);
    const [openModal2, setOpenModal2] = useState(false);
    const [openModal3, setOpenModal3] = useState(false);
    const [openModal4, setOpenModal4] = useState(false);
    const [openModal5, setOpenModal5] = useState(false);
    const [openModal6, setOpenModal6] = useState(false);
    const [openModal7, setOpenModal7] = useState(false);
    const [openModal8, setOpenModal8] = useState(false);
    const [openModal9, setOpenModal9] = useState(false);
    const [openModal10, setOpenModal10] = useState(false);
    const [roomName, setRoomName] = useState([]);
    const [powerUsage, setPowerUsage] = useState([]);
    useEffect(() => {
        db.collection("totalElectricity").get().then((querySnapshot) => {
            
            setRoomName([])
            setPowerUsage([])
            querySnapshot.forEach(element => {
                if (element.id > 10000 && element.id < 20000){
                    var data = element.data();
                    setRoomName(arr => [...arr , data.roomName]);
                    setPowerUsage(asd => [...asd , data.powerUsage]);
                }
                
            });
        })
    },
     []);

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
              'rgba(255, 192, 57, 1)',
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
              'rgba(255, 192, 57, 1)',
            ],
            
            borderWidth: 1,
          },
        ],
      };

      const data2 = {
        labels,
        datasets: [
          {
            label: 'Training Room 1',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 4500 })),
            borderColor: 'rgb(18, 18, 88, 1)',
            backgroundColor: 'rgba(18, 18, 88, 1)',
          },
          {
            label: 'Training Room 2',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 4500 })),
            borderColor: 'rgb(0, 63, 92, 1)',
            backgroundColor: 'rgba(0, 63, 92, 1)',
          },
          {
            label: 'Training Room 3',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 4500 })),
            borderColor: 'rgb(47, 75, 124, 1)',
            backgroundColor: 'rgba(47, 75, 124, 1)',
          },
          {
            label: 'Training Room 4',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 4500 })),
            borderColor: 'rgb(102, 81, 145, 1)',
            backgroundColor: 'rgba(102, 81, 145, 1)',
          },
          {
            label: 'Training Room 5',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 4500 })),
            borderColor: 'rgb(160, 81, 149, 1)',
            backgroundColor: 'rgba(160, 81, 149, 1)',
          },
          {
            label: 'Training Room 6',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 4500 })),
            borderColor: 'rgb(212, 80, 135, 1)',
            backgroundColor: 'rgba(212, 80, 135, 1)',
          },
          {
            label: 'Computer Lab 1',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 4500 })),
            borderColor: 'rgb(249, 93, 106, 1)',
            backgroundColor: 'rgba(249, 93, 106, 1)',
          },
          {
            label: 'Computer Lab 2',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 4500 })),
            borderColor: 'rgb(255, 124, 67, 1)',
            backgroundColor: 'rgba(255, 124, 67, 1)',
          },
          {
            label: 'Computer Lab 3',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 4500 })),
            borderColor: 'rgb(255, 166, 0, 1)',
            backgroundColor: 'rgba(255, 166, 0, 1)',
          },
          {
            label: 'Infomedia Room',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 4500 })),
            borderColor: 'rgb(255, 192, 57, 1)',
            backgroundColor: 'rgba(255, 192, 57, 1)',
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
                  <img src="/1floor.png" className={styles.res1} />  
                  <div className={styles.constraint} style={{marginTop: '-35%', marginLeft: '30%'}}>
                    <button className={styles.roundButton} id="myBtn" onClick={() => setOpenModal1(true)}>
                      <div className={styles.roundButtonCircle}>
                        <span className={styles.roundButton} />
                      </div>
                    </button>
                    <div id="myModal" className={styles.modal}></div>
                    <Modal1 
      open={openModal1} 
      onClose={() => setOpenModal1(false)} />
                  </div>
                  <div className={styles.constraint} style={{marginTop: '-6%', marginLeft: '45%'}}>
                  <button className={styles.roundButton} id="myBtn" onClick={() => setOpenModal2(true)}>
                      <div className={styles.roundButtonCircle}>
                        <span className={styles.roundButton} />
                      </div>
                    </button>
                    <div id="myModal" className={styles.modal}></div>
                    <Modal2
      open={openModal2} 
      onClose={() => setOpenModal2(false)} />
                  </div>
                  <div className={styles.constraint} style={{marginTop: '-5.8%', marginLeft: '55.5%'}}>
                  <button className={styles.roundButton} id="myBtn" onClick={() => setOpenModal3(true)}>
                      <div className={styles.roundButtonCircle}>
                        <span className={styles.roundButton} />
                      </div>
                    </button>
                    <div id="myModal" className={styles.modal}></div>
                    <Modal3
      open={openModal3} 
      onClose={() => setOpenModal3(false)} />
                  </div>
                  <div className={styles.constraint} style={{marginTop: '-5.8%', marginLeft: '62.5%'}}>
                  <button className={styles.roundButton} id="myBtn" onClick={() => setOpenModal4(true)}>
                      <div className={styles.roundButtonCircle}>
                        <span className={styles.roundButton} />
                      </div>
                    </button>
                    <div id="myModal" className={styles.modal}></div>
                    <Modal4
      open={openModal4} 
      onClose={() => setOpenModal4(false)} />
                  </div>
                  <div className={styles.constraint} style={{marginTop: '-5.8%', marginLeft: '73%'}}>
                  <button className={styles.roundButton} id="myBtn" onClick={() => setOpenModal5(true)}>
                      <div className={styles.roundButtonCircle}>
                        <span className={styles.roundButton} />
                      </div>
                    </button>
                    <div id="myModal" className={styles.modal}></div>
                    <Modal5
      open={openModal5} 
      onClose={() => setOpenModal5(false)} />
                  </div>
                  <div className={styles.constraint} style={{marginTop: '-5.8%', marginLeft: '86%'}}>
                  <button className={styles.roundButton} id="myBtn" onClick={() => setOpenModal6(true)}>
                      <div className={styles.roundButtonCircle}>
                        <span className={styles.roundButton} />
                      </div>
                    </button>
                    <div id="myModal" className={styles.modal}></div>
                    <Modal6
      open={openModal6} 
      onClose={() => setOpenModal6(false)} />
                  </div>
                  <div className={styles.constraint} style={{marginTop: '15%', marginLeft: '22%'}}>
                  <button className={styles.roundButton} id="myBtn" onClick={() => setOpenModal7(true)}>
                      <div className={styles.roundButtonCircle}>
                        <span className={styles.roundButton} />
                      </div>
                    </button>
                    <div id="myModal" className={styles.modal}></div>
                    <Modal7
      open={openModal7} 
      onClose={() => setOpenModal7(false)} />
                  </div>
                  <div className={styles.constraint} style={{marginTop: '-6%', marginLeft: '32%'}}>
                  <button className={styles.roundButton} id="myBtn" onClick={() => setOpenModal8(true)}>
                      <div className={styles.roundButtonCircle}>
                        <span className={styles.roundButton} />
                      </div>
                    </button>
                    <div id="myModal" className={styles.modal}></div>
                    <Modal8
      open={openModal8} 
      onClose={() => setOpenModal8(false)} />
                  </div>
                  <div className={styles.constraint} style={{marginTop: '-6%', marginLeft: '45%'}}>
                  <button className={styles.roundButton} id="myBtn" onClick={() => setOpenModal9(true)}>
                      <div className={styles.roundButtonCircle}>
                        <span className={styles.roundButton} />
                      </div>
                    </button>
                    <div id="myModal" className={styles.modal}></div>
                    <Modal9
      open={openModal9} 
      onClose={() => setOpenModal9(false)} />
                  </div>
                  <div className={styles.constraint} style={{marginTop: '-6%', marginLeft: '60%'}}>
                  <button className={styles.roundButton} id="myBtn" onClick={() => setOpenModal10(true)}>
                      <div className={styles.roundButtonCircle}>
                        <span className={styles.roundButton} />
                      </div>
                    </button>
                    <div id="myModal" className={styles.modal}></div>
                    <Modal10
      open={openModal10} 
      onClose={() => setOpenModal10(false)} />
                  </div>
                  </div>
                <div style={{flexGrow: 1}}>
                  <div className={styles.infobox} style={{ marginTop:'10%'}}>
                    <div style={{display: 'flex', height: '60px'}}>
                      <div style={{width: '20%', padding: '3%', background: 'white'}}>
                        <p style={{fontFamily: 'Arial, Helvetica, sans-serif', marginTop: '-3%', fontWeight: 'bold'}}>{date}</p>
                      </div>
                      <div style={{flexGrow: 1, padding: '3%', marginLeft: '-2%', background: 'white', textAlign: 'center'}}><p style={{fontFamily: 'Arial, Helvetica, sans-serif', marginTop: '-2%', fontWeight: 100, fontSize: 'large'}}>School of Information Technology Floor 1</p>
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


export default Firstfloor;
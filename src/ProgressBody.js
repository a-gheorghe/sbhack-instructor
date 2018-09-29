import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart } from 'chart.js';
import CloseIcon from './images/icon-close.svg';
import StudentCard from './StudentCard';
import AnaPic from './images/ana-1x.jpg';
import SophiePic from './images/sophie-2x.jpg';
import HollyPic from './images/holly-2x.jpg';
import SimonPic from './images/simon-2x.jpg';
import './App.css';


const data = {
      labels: ["Complete", "Incomplete"],
      datasets: [{
                data: [12, 5],
                backgroundColor: ['#107e7a', '#e2e8ee'],
                text: `${12 / (5+12)}`
              }]
        };

class ProgressBody extends Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     percentageDone: data.datasets[0].data[0] / (data.datasets[1].data[1] + data.datasets[0].data[0]) * 100
  //   }
  // }
  // componentDidMount() {
  //   const data = {
  //     labels: ["Complete", "Incomplete"],
  //     datasets: [{
  //               data: [12, 5],
  //               backgroundColor: ['#107e7a', '#e2e8ee'],
  //               text: `${this.state.percentageDone}`
  //             }]
  //           };
  //
  // }
  //
  // componentDidUpdate() {
  //   const data = {
  //     labels: ["Complete", "Incomplete"],
  //     datasets: [{
  //               data: [12, 5],
  //               backgroundColor: ['#107e7a', '#e2e8ee'],
  //               text: `${this.state.percentageDone}`
  //             }]
  //           };
  //
  // }
  render() {
    return (
      <div className="progress-body">

        <div className="left-progress">
          <div className="student-progress-title">
            <p> Individual Student Progress</p>
          </div>
          <div className="student-progress-body">
            <StudentCard
              studentId={1}
              picture={HollyPic}
            />
            <StudentCard studentId={2} picture={AnaPic}/>
            <StudentCard studentId={3} picture={SophiePic}/>
            <StudentCard studentId={4} picture={SimonPic}/>
          </div>
        </div>

        <div className="right-progress">
          <div className="class-progress-title">
          <p> Class Completion </p>
          </div>
          <div className="class-progress-body">
          <Doughnut data={data} id="myChart"/>
          </div>
        </div>


      </div>
    );
  }
}


export default ProgressBody;

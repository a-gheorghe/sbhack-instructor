import React, { Component } from 'react';
import CloseIcon from './images/icon-close.svg';
import StudentCard from './StudentCard';
import AnaPic from './images/ana-1x.jpg';
import SophiePic from './images/sophie-2x.jpg';
import HollyPic from './images/holly-2x.jpg';
import SimonPic from './images/simon-2x.jpg';
import './App.css';

class ProgressBody extends Component {
  render() {
    return (
      <div className="progress-body">

        <div className="left-progress">
          <div className="student-progress-title">
            <p>Student Progress</p>
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
          </div>
        </div>


      </div>
    );
  }
}


export default ProgressBody;

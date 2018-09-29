import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';
import CloseIcon from './images/icon-close.svg';
import StudentCard from './StudentCard';
import Chart from './Chart';
import PieWithText from './PieWithText';
import DonutWithTextBigger from './DonutWithTextBigger';
import AnaPic from './images/ana-2x.jpg';
import SophiePic from './images/sophie-2x.jpg';
import HollyPic from './images/holly-2x.jpg';
import SimonPic from './images/simon-2x.jpg';
import JayPic from './images/jay-2x.jpg';
import './App.css';
import { exerRef } from "./firebase";

class ProgressBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      attempts: 0,
      errors: 0
    }
  }
  componentDidMount() {
    exerRef.on('value', snapshot => {
      const vals = snapshot.val();
      this.setState({
        attempts: vals.attempts,
        errors: vals.errors
      })
    });
  }

  // componentDidUpdate() {
  //   if (this.state.attempts === this.state.errors + 1) {
  //     var canvas = document.getElementsByTagName("canvas");
  //
  //     let ComponentToRender = DonutWithTextBigger
  //   }
  // }
  render() {
console.log(this.state)
    return (
      <div className="progress-body">

        <div className="left-progress">
          <div className="student-progress-title">
            <p> Individual Student Progress</p>
          </div>
          <div className="student-progress-body">
            <StudentCard
              studentId={1}
              picture={JayPic}
            />
            <StudentCard studentId={2} picture={AnaPic}/>
            <StudentCard studentId={3} picture={SophiePic}/>
            <StudentCard studentId={4} picture={HollyPic}/>
          </div>
        </div>

        <div className="right-progress">
          <div className="class-progress-title">
          <p> Class Completion </p>
          </div>
          <div className="class-progress-body">
            {this.state.attempts === this.state.errors + 1 ?
              <div className="percent-holder">
                <div className="absolute-percent"> 88% </div>
                <DonutWithTextBigger />
              </div>
              :
              <div className="percent-holder">
                <div className="absolute-percent"> 75% </div>
                <PieWithText />
              </div>
            }
          </div>
        </div>


      </div>
    );
  }
}


export default ProgressBody;

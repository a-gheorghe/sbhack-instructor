import React, { Component } from 'react';
import classnames from 'classnames';
import './App.css';


/* <div className="lozenge">
    <p> </p>
  </div>
*/
const response = {
  1: {
      name: 'Holly McLean',
      scores: [1, 1, 0],
      difficulty: 'Advanced'
    },
  2: {
      name: 'Ana-Stefania Gheorghe',
      scores: [0, 0, 0],
      difficulty: 'Easy'
    },
  3: {
      name: 'Sophie Qi',
      scores: [0, 1],
      difficulty: 'Intermediate'
    },
  4: {
    name: 'Simon GrossMan',
    scores: [],
    difficulty: 'Easy'
  }
}

class StudentCard extends Component {
  // componentDidMount
  // search database for student id and retrieve
  //scores array, picture, name, current difficulty level


  render() {
    return (
      <div className="individual-student-card">
        <div className="individual-left-info">
          <img src={this.props.picture} />
          <div className="name-dot-body">
            <p> {response[this.props.studentId].name} </p>
            <div className="dot-container">
              {response[this.props.studentId].scores.map(num => {
                return num ?
                <div className="green-circle" /> :
                <div className="red-circle" />
              }
              )}
            </div>
          </div>
        </div>
        <div className="individual-right-info" >

        </div>
      </div>
    );
  }
}


export default StudentCard;

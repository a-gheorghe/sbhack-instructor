import React, { Component } from 'react';
import classnames from 'classnames';
import './App.css';
import { exerRef } from "./firebase";


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
    name: 'Simon Grossman',
    scores: [],
    difficulty: 'Easy'
  }
}

class StudentCard extends Component {
  // componentDidMount
  // search database for student id and retrieve
  //scores array, picture, name, current difficulty level

  componentDidMount() {
    exerRef.on('value', snapshot => {
      const vals = snapshot.val();
      this.setState({
        attempts: vals.attempts,
        errors: vals.errors
      })
    });
  }

  componentDidUpdate() {
    const { errors, attempts } = this.state;
    function fillArrayWithNumbers(n) {
      const arr = Array.apply(null, Array(n));
      return arr.map(() => { return 0 });
    }
    if(errors === attempts) {
      response[4].scores = fillArrayWithNumbers(attempts);
    } else if(attempts === errors + 1) {
      response[4].scores[attempts + 1] = 1;
    }
  }


  render() {
    console.log(this.state)
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

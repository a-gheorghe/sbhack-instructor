import React, { Component } from 'react';
import Card from './Card';
import CourseName from './CourseName';
import StudentCard from './StudentCard';
import Header from './Header';
import AnaPic from './images/ana-2x.jpg';
import HelpAlert from './HelpAlert';
import AssignmentName from './AssignmentName';
import ProgressBody from './ProgressBody'
import './App.css';


//component did Mount --
  // check database to see if anyone needs help
  // if 3 sequential incorrect attempts
  // or if someone has specifically requested help
   // get studentId of the person that needs help
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="holder">
          <CourseName />
          <HelpAlert
            pic={AnaPic}
            studentName={"Ana"}
            // studentId={returnedId}
          />
            <div className="window-holder">
              <AssignmentName name="EXERCISE 1 - ADDITION"/>
              <ProgressBody />
            </div>
          </div>
      </div>
    );
  }
}


export default App;

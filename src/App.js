import React, { Component } from 'react';
import Card from './Card';
import CourseName from './CourseName';
import StudentCard from './StudentCard';
import Header from './Header';
import AnaPic from './images/simon-2x.jpg';
import HelpAlert from './HelpAlert';
import AssignmentName from './AssignmentName';
import ProgressBody from './ProgressBody'
import './App.css';
import { exerRef } from "./firebase";

//component did Mount --
  // check database to see if anyone needs help
  // if 3 sequential incorrect attempts
  // or if someone has specifically requested help
   // get studentId of the person that needs help
class App extends Component {
  state = {
    error: false
  }

  toggleErrorFalse = () => {
    this.setState({ error: false })
  }

  componentDidMount() {
    exerRef.on('value', snapshot => {
      const vals = snapshot.val();
      this.setState({
        error: vals.errors === 4 && vals.attempts === vals.errors
      })
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="holder">
          <CourseName />
          {this.state.error && <HelpAlert
            pic={AnaPic}
            studentName={"Holly"}
            toggleErrorFalse={this.toggleErrorFalse}
          />}
            <div className="window-holder">
              <AssignmentName name="EXERCISE 1 -- ADDITION"/>
              <ProgressBody />
            </div>
          </div>
      </div>
    );
  }
}


export default App;

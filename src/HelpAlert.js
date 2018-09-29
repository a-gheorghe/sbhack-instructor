import React, { Component } from 'react';
import CloseIcon from './images/icon-close.svg';
import './App.css';


// this.props.studentId
// componentDidMount --> retrieve the student info (name, picture)
class HelpAlert extends Component {
  render() {
    return (
      <div className="help-alert">
        <span>
          <img className="picture" src={this.props.pic} />
          <p> Hey, <b>{this.props.studentName}</b> could use a helping hand! </p>
        </span>
        <img className="right-style" src={CloseIcon} />
      </div>
    );
  }
}


export default HelpAlert;

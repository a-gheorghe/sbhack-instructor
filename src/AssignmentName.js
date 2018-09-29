import React, { Component } from 'react';
import ChevronRight from './images/icon-right.svg';
import ChevronLeft from './images/icon-left.svg';
import './App.css';

class AssignmentName extends Component {
  render() {
    return (
      <div className="assignment-name">
        <span> {this.props.name} </span>
        <div className="assignment-navigation">
          <img className="left-chevron" src={ChevronLeft}/>
          <img className="right-chevron" src={ChevronRight}/>
        </div>
      </div>
    );
  }
}


export default AssignmentName;

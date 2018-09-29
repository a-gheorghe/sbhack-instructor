import React, { Component } from 'react';
import CloseIcon from './images/icon-close.svg';
import './App.css';




class HelpAlert extends Component {
  // imageClick = () => {
  //   const helpComp = document.getElementById("help-alert");
  //   helpComp.remove();
  // }
  render() {
    return (
      <div className="help-alert" id='help-alert'>
        <span>
          <img className="picture" src={this.props.pic} />
          <p> Hey, <b>{this.props.studentName}</b> could use a helping hand! </p>
        </span>
        <img className="right-style" src={CloseIcon} onClick={this.props.toggleErrorFalse}/>
      </div>
    );
  }
}


export default HelpAlert;

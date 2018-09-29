import React, { Component } from 'react';
import logo from './images/logo.svg';
import SimonHeader from './images/simon-header1.jpg';
import './App.css';

class Header extends Component {
  render() {
    return (
      <header className="App-header" style={{display: "flex", justifyContent: "space-between"}}>
        <img alt="code-canada-logo" src={logo} style={{position: "relative", left: "50px", top: "-30px"}}/>
        <div>
          <img alt="dropdown-menu-instructor" src={SimonHeader} style={{position: "relative", right: "70px", top: "-22px"}}/>
        </div>
      </header>
    );
  }
}


export default Header;

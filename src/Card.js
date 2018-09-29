import React, { Component } from 'react';
import StudentCard from './StudentCard';
import CourseName from './CourseName';
import './Card.css';

class Card extends Component {
  render() {
    return (
      <div className="card" id={this.props.id}>
        {this.props.children}
      </div>
    );
  }
}


export default Card;

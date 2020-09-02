import React, { Component } from 'react';
import Card from './Card';
import './CardSet.css';

class CardSet extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.data;

    this.generateCards = this.generateCards.bind(this);
  }

  generateCards() {
    return this.props.data.map(robot => {
      return <Card 
        key={ robot.id } 
        name={ robot.name } 
        email={ robot.email } 
        delete={ this.props.delete } 
        datakey={ robot.id } />
    });
  }

  render() {
    return <div id='card-set'>
      { this.generateCards() }
    </div>;
  }
};

export default CardSet;
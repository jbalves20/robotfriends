import React, { Component } from 'react';
import './Card.css'

class Card extends Component {
  render() {
    return (
      <div className='card bg-light-yellow dib br3 pa3 ma2 grow bw2 shadow-5'>
        <img src={ `https://robohash.org/${ this.props.name }?200x200` } alt="robot"/>
        <div className='card-info'>
          <h2>{ this.props.name }</h2>
          <p>{ this.props.email }</p>
        </div>
      </div>
    );
  }
}

export default Card;
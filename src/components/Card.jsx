import React, { Component } from 'react';
import './Card.css'

class Card extends Component {
  render() {
    return (
      <div className='card bg-dark-gray dib br3 pa3 ma2 grow bw2 shadow-5'>
        <span className="silver close grow b" datakey={ this.props.datakey }
          onClick={ e => this.props.delete(e) }>x</span>
        <img src={ `https://robohash.org/${ this.props.name }?200x200` } alt="robot"/>
        <div className='light-gray card-info'>
          <h2>{ this.props.name }</h2>
          <p>{ this.props.email }</p>
        </div>
      </div>
    );
  }
}

export default Card;
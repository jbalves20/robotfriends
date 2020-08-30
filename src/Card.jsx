import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
      <div className='bg-washed-yellow dib br3 pa3 ma2 grow bw2 shadow-5'>
        <img src={ `https://robohash.org/${ this.props.name }?200x200` } alt="robot"/>
        <div>
          <h2>{ this.props.name }</h2>
          <p>{ this.props.email }</p>
        </div>
      </div>
    );
  }
}

export default Card;
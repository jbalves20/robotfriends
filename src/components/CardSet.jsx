import React from 'react';
import Card from './Card';
import './CardSet.css';

function Cards(props) {
  const cards = props.robots.map(r => {
    return <Card key={ r.id } name={ r.name } email={ r.email } />
  });
return <div id='card-set'>
    { cards }
  </div>;
};

export default Cards;
import React from 'react';
import Card from './Card';

function Cards(props) {
  const cards = props.items.map(c => {
    return <Card key={ c.id } name={ c.name } email={ c.email } />
  });
return <div>{ cards }</div>;
};

export default Cards;
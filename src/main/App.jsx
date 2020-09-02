import React, { Fragment } from 'react';
import TopBar from '../components/TopBar';
import CardSet from '../components/CardSet';
import robots from '../assets/static/robots';

function App(props) {
  return (
    <Fragment>
      <TopBar />
      <CardSet robots={ robots } />
    </Fragment>
  )
}

export default App;
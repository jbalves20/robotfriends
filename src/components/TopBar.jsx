import React, { Fragment } from 'react';
import ControlInterface from './ControlInterface';
import './TopBar.css';

function TopBar(props) {
  return (
    <Fragment>
      <h1 className="page-title bg-dark-gray tc pa4 ma0">
        <a href="/" className="light-gray title-link">Robotfriends</a>
      </h1>
      <ControlInterface />
    </Fragment>
  )
}

export default TopBar;
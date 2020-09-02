import React, { Fragment } from 'react';
import ControlInterface from './ControlInterface';
import './TopBar.css';

function TopBar(props) {
  return (
    <Fragment>
      <h1 className="page-title bg-dark-gray tc pa4 ma0">
        {/* eslint-disable-next-line */}
        <a href="" className="light-gray title-link">Robotfriends</a>
      </h1>
      <ControlInterface deleteAll={ props.deleteAll } addRobot={ props.addRobot } />
    </Fragment>
  )
}

export default TopBar;
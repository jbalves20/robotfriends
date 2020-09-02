import React, { Fragment, Component } from 'react';
import TopBar from '../components/TopBar';
import CardSet from '../components/CardSet';
import robotsData from '../assets/static/robots';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { robots: robotsData };

    this.addRobot = this.addRobot.bind(this);
    this.getNewId = this.getNewId.bind(this);
    this.delete = this.delete.bind(this);
  }

  addRobot(robotData) {
    const robots = this.state.robots;
    const newId = this.getNewId();

    robots.push({ id: newId, ...robotData });
    this.setState(robots);
  }

  getNewId() {
    if(this.state.robots && this.state.robots.length > 0) {
      return this.state.robots.map(robot => robot.id)
        .reduce((max, current) => current > max ? current : max) + 1;
    }
    return 1;
  }

  deleteAll() {
    this.setState({ robots: {} });
  }

  delete(event) {
    // console.log(event.target.getAttribute('datakey'))
    const robots = this.state.robots;
    const remaining = robots.filter(r => r.id !== parseInt(event.target.getAttribute('datakey')));
    this.setState({ robots: remaining });
    console.log(this.state.robots)
  }

  onSearchChange(event) {

  }
  
  render() {
    return (
      <Fragment>
        <TopBar deleteAll={ this.deleteAll } addRobot={ this.addRobot } />
        <CardSet data={ this.state.robots } delete={ this.delete } />
      </Fragment>
    );
  }
}

export default App;
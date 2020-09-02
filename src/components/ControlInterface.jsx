import React from 'react';
import Card from './Card';
import ReactDOM from 'react-dom';
import './ControlInterface.css';

class ControlInterface extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', email: '' };

    this.handleChange = this.handleChange.bind(this);
  }

  insertTest() {
    ReactDOM.render(
      <Card key='0' name={ this.state.name || ' ' } email={ this.state.email } />,
      document.getElementById('card-set')
    )
  };

  handleChange(event) {
    const s = { ...this.state };
    s[event.target.name] = event.target.value;
    this.setState(s);
    // console.log(s[event.target.name], this.state)
  }

  render () {
    return (
      <div className="control">
        <h3 className="tc">Create your own Robotfriend:</h3>
        <div className="form-row flex flex-wrap justify-center mt3">
          <div className="form-group">
            <label for="name">Name</label>
            <input type="text" placeholder="Enter de robot's name..." name="name"
              value={ this.state.name } onChange={ e => this.handleChange(e) } />
          </div>
          <div className="form-group">
            <label for="email">E-mail</label>
            <input type="text" placeholder="Enter the robot's e-mail..." name="email"
              value={ this.state.email } onChange={ e => this.handleChange(e) } />
          </div>
        </div>

        <div className="form-buttons" className="tc mt2 mb2">
          <button className="button white bg-black" onClick={ e => this.insertTest(e) }>Generate</button>
        </div>
      </div>
    );
  };
};

export default ControlInterface;
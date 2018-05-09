import React, { Component } from 'react';

import './styles/css/app.css';

import RocketImg from './images/Rocket.svg';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      navOpen: false
    }

    this.toggleNav = this.toggleNav.bind(this)
  }

  toggleNav() {
    this.setState({navOpen: !this.state.navOpen});
  }

  render() {
    var menuClass = this.state.navOpen ? "menu-wrapper open" : "menu-wrapper";

    return (
      <div className="App">
        <div className="nav-container">
          <div className={menuClass}>
            <ul >
              <li><span>Home</span></li>
              <li>Work</li>
              <li>Services</li>
              <li>About</li>
              <li>Resources</li>
              <li>Contact</li>
              <li></li>
            </ul>
            <div className="nav-rocket"><img src={RocketImg} /></div>
          </div>
          <button className="nav-button" onClick={this.toggleNav} >MENU</button>
        </div>
        <div className="page-content">
          <h1>BIG WORDS</h1>
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class HeaderButton extends Component{
  render() {
    return (
      <li>
          <a data-toggle="tab" className={this.props.active ? "active" : ""} href={this.props.ref} download>{this.props.name} <span className="sr-only">(current)</span></a>
      </li>
    )
  }

}

class Header extends Component {
  render(params) {
    return (
    <nav className="navbar navbar-default navbar-top">
      <div className="container navbar-left">
          <a className="navbar-brand" data-toggle="tab" href="#about">Calvin</a>
          <ul className="nav navbar-nav">
            <HeaderButton active="active" ref="#about" name="About"/>
            <li>
                <a data-toggle="tab" href="#pro" download>Hire Me <span className="sr-only">(current)</span></a>
            </li>
            <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Family History Tech Lab <span className="caret"></span></a>
              <ul className="dropdown-menu">
                <li><a data-toggle="tab" href="https://fhtl.byu.edu">Family History Tech Lab Portal</a></li>
                <li><a data-toggle="tab" href="https://recordquest.fhtl.byu.edu">Record Quest</a></li>
                <li><a data-toggle="tab" href="https://virtual-pedigree.fhtl.byu.edu">Virtual Pedigree</a></li>
              </ul>
            </li>
          </ul>
      </div>
    </nav>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

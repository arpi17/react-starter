import { hot } from 'react-hot-loader/root';
import React, { Component } from 'react';
import './App.css';

import TestRender from './components/TestRender';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClickled: false
    };
  }

  // FIXME: Configure ESlint to ingore this warning
  handleClick = () => {
    this.setState({ isClickled: !this.state.isClickled });
  };

  render() {
    return (
      <div>
        <h1>Hello React World!🚀</h1>
        <TestRender onClick={this.handleClick} />
        <h2>{this.state.isClickled ? 'Clicked' : 'Not Clicked Yet'}</h2>
      </div>
    );
  }
}

export default hot(App);

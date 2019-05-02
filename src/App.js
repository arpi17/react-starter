import React, { Component } from 'react';
import './App.css';

import TestRender from './components/TestRender';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClickled: false,
      list: ['one', 'two', 'three', 'five']
    };
  }

  handleClick = () => {
    this.setState({ isClickled: !this.state.isClickled });
  };

  render() {
    return (
      <div>
        <h1>Hello React World!🚀</h1>
        <TestRender onClick={this.handleClick} />
        <h2>{this.state.isClickled ? 'Clicked' : 'Not Clicked Yet'}</h2>
        <ul>
          {this.state.list.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;

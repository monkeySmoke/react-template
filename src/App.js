import React, { Component } from 'react';
import './App.css';
import AsyncComponent from './components/AsyncComponent'

const Test = AsyncComponent(() => import(/* webpackChunkName: "Test" */ './pages/Test'))

class App extends Component {
  render() {
    return (
      <div className="App">
        <Test></Test>
      </div>
    );
  }
}

export default App;

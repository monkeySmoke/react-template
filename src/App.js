import React, { Component } from 'react';
import {ConnectedRouter} from 'react-router-redux';
import {Route} from 'react-router-dom';
import './App.css';
import {history} from './redux/store'
import AsyncComponent from './components/AsyncComponent'

const Test = AsyncComponent(() => import(/* webpackChunkName: "Test" */ './pages/Test'))

class App extends Component {
  render() {
    return (
        <ConnectedRouter history={history}>
          <div className="App">
            <Route exact path="/test" component={Test} />
          </div>
        </ConnectedRouter>
    );
  }
}

export default App;

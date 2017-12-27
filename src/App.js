import React, { Component } from 'react';
import { ConnectedRouter } from 'react-router-redux';
import { Switch } from 'react-router-dom';
import 'nprogress/nprogress.css';
import './App.css';
import { history } from './redux/store';
import AsyncComponent from './components/AsyncComponent';
import PrivateRoute from './components/PrivateRoute';

const Test = AsyncComponent(() => import(/* webpackChunkName: "Test" */ './pages/Test'));
const Index = AsyncComponent(() => import(/* webpackChunkName: "Index" */ './pages/Index'));
const Login = AsyncComponent(() => import(/* webpackChunkName: "Login" */ './pages/Login'));


class App extends Component {
  render() {
    return (
      <ConnectedRouter history={history}>
        <div className="App">
          <Switch>
            <PrivateRoute path="/test" component={Test} />
            <PrivateRoute path="/login" component={Login} />
            <PrivateRoute path="/" component={Index} />
          </Switch>

        </div>
      </ConnectedRouter>
    );
  }
}

export default App;

import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import Login from './Presentation';
import { actions } from './redux/';

@connect(null, {
  loginAction: actions.loginAction,
})
export default class LoginContainer extends Component {
  static propTypes = {
    loginAction: propTypes.func,
  }
  render() {
    const { loginAction } = this.props;
    return (
      <Login loginAction={loginAction} />
    );
  }
}

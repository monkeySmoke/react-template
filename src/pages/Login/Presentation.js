import React from 'react';
import propTypes from 'prop-types';
import LoginForm from './components/LoginForm/LoginForm';
import './Login.less';

const Login = ({ loginAction }) => (
  <div className="login">
    <LoginForm loginAction={loginAction} />
  </div>
);
Login.propTypes = {
  loginAction: propTypes.func,
};
export default Login;

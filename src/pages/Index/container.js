import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { selectors, actions } from './redux/';
import Index from './Presentation';

@connect(state => ({
  userName: selectors.getUserName(state),
}), {
  getUserAction: actions.getUserAction,
})
export default class IndexContainer extends Component {
  static propTypes = {
    userName: propTypes.string,
    getUserAction: propTypes.func,
  }
  componentDidMount() {
    this.props.getUserAction();
  }
  render() {
    const { userName } = this.props;
    return userName === '' ? <div>正在获取登录用户信息</div> : <Index />;
  }
}

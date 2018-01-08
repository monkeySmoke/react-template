import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { selectors } from '../redux/';

@connect(state => ({
  userName: selectors.getUserName(state),
}))
export default class PrivateRoute extends Component {
    static propTypes = {
      userName: PropTypes.string.isRequired,
      component: PropTypes.func.isRequired,
    }
    componentWillReceiveProps() {
      if (Object.prototype.hasOwnProperty.call(window, '$HttpPendingList') && window.$HttpPendingList.length > 0) {
        window.$HttpPendingList.forEach((item) => {
          item();
        });
      }
    }
    render() {
      const { component: Comp, userName, ...rest } = this.props;
      return (
        <Route
          {...rest}
          render={props => (
                userName !== '' ? (
                  <Comp {...props} />
                ) : (
                  <Redirect to="/login" />)
            )}
        />
      );
    }
}

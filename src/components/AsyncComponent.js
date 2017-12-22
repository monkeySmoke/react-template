import React, { Component } from 'react';

export default function (importComponent) {
  class AsyncComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        component: null,
      };
    }
    async componentDidMount() {
      const { default: component } = await importComponent();
      this.setState({ component });
    }
    render() {
      const Comp = this.state.component;
      return Comp ? <Comp {...this.props} /> : null;
    }
  }
  return AsyncComponent;
}

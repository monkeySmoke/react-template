import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../Navbar/Navbar';


const Layout = props => (
  <div className="layout">
    <div className="layout_nav">
      <Navbar />
    </div>
    <div className="layout_content">
      {props.children}
    </div>
  </div>
);
Layout.propTypes = {
  children: PropTypes.element.isRequired,
};
export default Layout;

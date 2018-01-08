import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.less';

const Navbar = () => (
  <div className="navbar">
    <NavLink className="navbar_item" activeClassName="navbar_item_selected" to="/exchequer">
          国库监控
    </NavLink>
    <NavLink className="navbar_item" activeClassName="navbar_item_selected" to="/expend">
        支出监控
    </NavLink>
    <NavLink className="navbar_item" activeClassName="navbar_item_selected" to="/blacklist">
        黑名单企业管理
    </NavLink>
  </div>
);

export default Navbar;

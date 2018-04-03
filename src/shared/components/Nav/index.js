import React from "react";
import { NavLink } from "react-router-dom";
import "./style/index.css";

const Nav = () => {
  return (
    <nav>
      <NavLink exact={true} activeClassName='active' to='/'>Home</NavLink>
      <NavLink exact={true} activeClassName='active' to='/categories'>Categories</NavLink>
    </nav>
  )
}

export default Nav

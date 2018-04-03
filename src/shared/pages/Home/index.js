import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import "./style/index.css";
import Nav from '/shared/components/Nav'

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Nav/>
        <div className='login'>
          <Link to='/categories'>Log in</Link>
        </div>
      </div>
    );
  }
}

export default Home;

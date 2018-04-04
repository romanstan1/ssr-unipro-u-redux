import React, { Component } from "react";
import Nav from '/shared/components/Nav'


export default class Error extends Component {
  render() {
    return (
      <span>
        <Nav/>
        <p> 404 Error </p>
        <p> Page not found </p>
      </span>
    )
  }
}

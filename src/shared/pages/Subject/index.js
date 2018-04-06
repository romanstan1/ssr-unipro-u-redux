import React, { Component } from "react";
import { connect } from "react-redux";
import humanize from 'string-humanize'
import { Link } from "react-router-dom";
import { fetchSubject } from "/shared/store/modules/api";
import Nav from '/shared/components/Nav'
import SubjectContent from './SubjectContent'
import { fetchCategories } from "/shared/store/modules/api";

class Subject extends Component {
  // static initialAction(url) {
  //   return fetchSubject(url)
  // }

  static initialAction() {
    return fetchCategories();
  }

  componentDidMount() {
    if (!this.props.categories) {
      this.props.dispatch(Subject.initialAction());
    }
  }


  // componentDidMount() {
  //   console.log("this.props.subjects: ",this.props.subjects)
  //   const subjectNames = Object.keys(this.props.subjects)
  //   const url = this.props.match.url
  //   const slug = url.split("/").pop()
  //
  //   // if (subjectNames.includes(slug)) {
  //   //   // console.log("componentDidMount dispatch")
  //   //   this.props.dispatch(Subject.initialAction(url))
  //   // }
  //
  // }

  render() {
    const { subjects } = this.props
    // console.log("subjects: ",subjects)
    return (
      <span>
        <Nav/>
        <Link to='/categories'>Back to categories</Link>
        {/* <SubjectContent subjects={subjects}/> */}
      </span>
    )
  }
}

export default connect(state => ({
  subjects: state.subjects
}))(Subject);

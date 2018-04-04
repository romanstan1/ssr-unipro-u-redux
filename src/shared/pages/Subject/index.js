import React, { Component } from "react";
import { connect } from "react-redux";
import humanize from 'string-humanize'
import { Link } from "react-router-dom";
import { fetchSubject } from "/shared/store/modules/api";
import Nav from '/shared/components/Nav'
import SubjectContent from './SubjectContent'

class Subject extends Component {
  // static initialAction() {
  //   // return fetchCategories();
  // }

  componentDidMount() {
    // if (!this.props.categories) {
    //   this.props.dispatch(Categories.initialAction());
    // }
  }

  render() {
    // console.log('props: ', this.props.match.params.slug)

    const { subject } = this.props
    return (
      <span>
        <Nav/>
        <Link to='/categories'>Back to categories</Link>
        <SubjectContent subject={subject}/>

        {/* <CategoriesList categories={categories} /> */}
      </span>
    )
  }
}

export default connect(state => ({
  subject: state.subject
}))(Subject);

import React, { Component } from "react";
import { connect } from "react-redux";
import humanize from 'string-humanize'
import { Link } from "react-router-dom";
import { fetchSubject } from "/shared/store/modules/api";
import Nav from '/shared/components/Nav'
import SubjectContent from './SubjectContent'
import NoSubjectFound from './NoSubjectFound'
import NoCategoryFound from './NoCategoryFound'
import { fetchCategories } from "/shared/store/modules/api";
import {cleanUrl} from "/shared/utils"
import { Redirect } from 'react-router-dom'
import "./style/CategoriesList.css";


class Subject extends Component {

  static initialAction() {
    return fetchCategories();
  }

  componentDidMount() {
    if (!this.props.categories) {
      this.props.dispatch(Subject.initialAction());
    }
  }

  nextSubject = () => {
    console.log("nextSubject")
  }

  render() {
    const { categories, defaultSubject } = this.props
    const {slug, title} = this.props.match.params

    if(categories) {
      var category = categories.find(category => slug === cleanUrl(category.title))
    }

    if(category && category.subjects) {
      var subject = category.subjects.find(subject => title === cleanUrl(subject.title))
    }

    if (category && category.subjects && defaultSubject) {
      subject = category.subjects.find((subject,index) => index === 0)
      var redirect = '/categories/' + slug + '/' + cleanUrl(subject.title)
    }

    return (
      <span>
        <Nav/>
        <Link to='/categories'>Back to categories</Link>
        {redirect? <Redirect to={redirect}/> : null }
        {
          category?
            subject?
            <SubjectContent nextSubject={this.nextSubject} subject={subject}/> :
            <NoSubjectFound
              categoryTitle={category.title}
              categoryUrl={cleanUrl(category.title)}
            /> :
          <NoCategoryFound/>
        }
      </span>
    )
  }
}

export default connect(state => ({
  categories: state.categories
}))(Subject);

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
import { swipeSubject } from "/shared/store/modules/actions";
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

  swipeSubject = (categoryTitle, direction, subjectTitle) => {
    const currentIndex = this.props.categories
      .find(category => categoryTitle === category.title).subjects
      .findIndex(subject => subjectTitle === subject.title)
    const nextIndex = currentIndex + direction
    this.props.dispatch(swipeSubject(categoryTitle,nextIndex))
  }

  render() {
    const { categories, defaultSubject } = this.props
    const {slug, title} = this.props.match.params

    if(categories) {
      var category = categories.find(category => slug === cleanUrl(category.title))
      // console.log("cat index: ",category.index)
    }

    if(category && category.subjects) {

      var subject = category.subjects.find(subject => title === cleanUrl(subject.title))

      if(typeof category.index === 'number') {
        // check index against current slug, redirect to slug url if they do not match

        // console.log("category && subject",category, subject)
        // console.log("")
        // console.log("category.index: ", category.index)

        var newSubject = category.subjects.find((subject, index) => index === category.index)
        //
        // console.log("")
        // console.log("newSubject: ",newSubject)
        // const currentIndex = category.subjects
        //   .findIndex(subject => subject.title)

        // console.log("currentIndex",currentIndex)

        // var redirect = '/categories/' + slug + '/' + cleanUrl(subject.title)

        // <Redirect to={redirect}/>
      }

      // if(category.index) {
      //   var subject = category.subjects.find((subject, index) => index === category.index)
      // } else {
      //   subject = category.subjects.find(subject => title === cleanUrl(subject.title))
      // }


    }

    if (category && category.subjects && defaultSubject) {
      console.log("defaultSubject: ",defaultSubject)
      subject = category.subjects.find((subject,index) => index === 0)
      var redirect = '/categories/' + slug + '/' + cleanUrl(subject.title)
    }

    if(newSubject && subject.title !== newSubject.title) {
      return <Redirect to={'/categories/' + slug + '/' + cleanUrl(newSubject.title)}/>
    }

    return (
      <span>
        <Nav/>
        <Link to='/categories'>Back to categories</Link>
        {redirect? <Redirect to={redirect}/> : null }
        {
          category?
            subject?
            <SubjectContent categoryTitle={category.title} swipeSubject={this.swipeSubject} subject={subject}/> :
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

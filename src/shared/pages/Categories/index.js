import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCategories } from "/shared/store/modules/api";
import CategoriesList from "./CategoriesList";
import Nav from '/shared/components/Nav'


class Categories extends Component {
  static initialAction() {
    return fetchCategories();
  }

  componentDidMount() {
    if (!this.props.categories) {
      this.props.dispatch(Categories.initialAction());
    }
  }

  render() {
    const { categories } = this.props
    return (
      <span>
        <Nav/>
        {categories? <CategoriesList categories={categories} /> : null}
      </span>
    )
  }
}

export default connect(state => ({
  categories: state.categories
}))(Categories);

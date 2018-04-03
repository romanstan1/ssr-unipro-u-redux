import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchNews } from "../../store/modules/api";
import CategoriesList from "./CategoriesList";
import Nav from '/shared/components/Nav'


class Categories extends Component {
  static initialAction() {
    return fetchNews();
  }

  componentDidMount() {
    if (!this.props.categories) {
      this.props.dispatch(Categories.initialAction());
    }
  }

  render() {
    const { categories } = this.props;
    return (
      <span>
        <Nav/>
        <CategoriesList categories={categories} />
      </span>
    )
  }
}

const mapStateToProps = state => ({
  categories: state.categories
});

export default connect(mapStateToProps)(Categories);

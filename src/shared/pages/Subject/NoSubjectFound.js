import React from "react";
import "./style/CategoriesList.css";
import humanize from 'string-humanize'
import { Link, NavLink } from "react-router-dom";

const NoSubjectFound = ({categoryTitle, categoryUrl}) =>
  <div className="subject-content">
    <div className="list">
        <br/><br/>
        This subject is not found!
        <br/><br/>
        <Link to={`/categories/${categoryUrl}`}> Back to {categoryTitle}</Link>
    </div>
  </div>

export default NoSubjectFound

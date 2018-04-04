import React from "react";
import "./style/CategoriesList.css";
import humanize from 'string-humanize'
import { Link, NavLink } from "react-router-dom";

const CategoriesList = ({ categories }) =>
  <div className="categories-list">
    <div className="list">
      {
        categories &&
        categories.map(category =>
          <div key={category.title}>
            <Link to={`/categories/${category.title}`}>{humanize(category.title)}</Link>
          </div>
        )
      }
    </div>
  </div>

export default CategoriesList

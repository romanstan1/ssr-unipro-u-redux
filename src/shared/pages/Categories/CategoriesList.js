import React from "react";
import "./style/CategoriesList.css";
import humanize from 'string-humanize'
import { Link, NavLink } from "react-router-dom";
import {cleanUrl} from "/shared/utils"

const CategoriesList = ({ categories }) => {
  return <div className="categories-list">
      <div className="list">
        {
          categories.map(category =>
            <div key={category.title}>
              <Link to={`/categories/${cleanUrl(category.title)}`}>
                {category.title}
              </Link>
            </div>
          )
        }
      </div>
    </div>
}

export default CategoriesList

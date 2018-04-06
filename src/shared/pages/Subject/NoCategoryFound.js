import React from "react";
import "./style/CategoriesList.css";
import humanize from 'string-humanize'
import { Link, NavLink } from "react-router-dom";

const NoCategoryFound = () =>
  <div className="subject-content">
    <div className="list">
        <br/><br/>
        This category is not found!
        <br/><br/>
        <Link to='/categories'>Back to the category menu</Link>
    </div>
  </div>

export default NoCategoryFound

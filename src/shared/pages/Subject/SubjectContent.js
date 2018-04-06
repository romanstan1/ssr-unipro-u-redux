import React from "react";
import "./style/CategoriesList.css";
import humanize from 'string-humanize'
import { Link, NavLink } from "react-router-dom";

const SubjectContent = ({ subject }) =>
  <div className="subject-content">
    <div className="list">
      { JSON.stringify(subject) }
    </div>
  </div>

export default SubjectContent

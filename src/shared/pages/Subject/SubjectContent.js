import React from "react";
import "./style/Subject.css";
import humanize from 'string-humanize'
import { Link, NavLink } from "react-router-dom";

const SubjectContent = ({ categoryTitle, subject, swipeSubject }) =>
  <div className="subject-content">

    <div className="list">

      <h2> {subject.title}</h2> <br/>
      <div>
        { JSON.stringify(subject) }
      </div>
    </div>

    <div className='buttons'>
      <div onClick={() => swipeSubject(categoryTitle, -1, subject.title)}>Previous</div>
      <div onClick={() => swipeSubject(categoryTitle, 1, subject.title)}>Next</div>
    </div>

  </div>

export default SubjectContent

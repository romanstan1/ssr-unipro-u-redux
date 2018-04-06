import React from "react";
import "./style/Subject.css";
import humanize from 'string-humanize'
import { Link, NavLink } from "react-router-dom";

const SubjectContent = ({ subject, nextSubject }) =>
  <div className="subject-content">

    <div className="list">

      <h2> {subject.title}</h2> <br/>
      <div>
        { JSON.stringify(subject) }
      </div>
    </div>

    <div className='buttons'>
      <div onClick={nextSubject}>Previous</div>
      <div onClick={nextSubject}>Next</div>
    </div>

  </div>

export default SubjectContent

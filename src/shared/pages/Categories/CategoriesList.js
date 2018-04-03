import React from "react";
import "./style/CategoriesList.css";

const CategoriesList = ({ categories }) =>
  <div className="categories-list">
    <div className="header"> List of Categories </div>
    <div className="list">
      {categories &&
        categories.map(post =>
          <div key={post.id}>
            <p>
              <span> {post.id}</span> {post.title}
            </p>
          </div>
        )
      }
    </div>

  </div>

export default CategoriesList

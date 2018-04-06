import React from "react";
import Home from "./Home";
import Categories from "./Categories";
import Subject from "./Subject"
import Error from "./Error"

const routes = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/categories/:slug/:title",
    component: Subject,
  },
  {
    path: "/categories/:slug",
    exact: true,
    component: (props) => <Subject defaultSubject {...props}/>
  },
  {
    path: "/categories",
    exact: true,
    component: Categories
  },
  {
    component: Error
  }
];

export default routes;

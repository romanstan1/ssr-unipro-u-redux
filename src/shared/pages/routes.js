import Home from "./Home";
import Categories from "./Categories";

const routes = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/categories",
    component: Categories
  }
];

export default routes;

import Home from "./Home";
import Categories from "./Categories";
import Subject from "./Subject"
import Error from "./Error"




// 
// const routes = [
//   { component: Root,
//     routes: [
//       { path: '/',
//         exact: true,
//         component: Home
//       },
//       { path: '/child/:id',
//         component: Child,
//         routes: [
//           { path: '/child/:id/grand-child',
//             component: GrandChild
//           }
//         ]
//       }
//     ]
//   }
// ]



const routes = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/categories",
    exact: true,
    component: Categories
  },
  {
    path: "/categories/:slug",
    component: Subject
  }
  // {
  //   component: Error
  // }
];

export default routes;

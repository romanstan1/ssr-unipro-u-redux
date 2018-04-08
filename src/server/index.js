import express from "express";
import cors from "cors";
import React from "react";
import { renderToString } from "react-dom/server";
import { Provider } from "react-redux";
import { StaticRouter, matchPath } from "react-router-dom";
import serialize from "serialize-javascript";
import routes from "../shared/pages/routes";
import configureStore from "../shared/store/configureStore";
import App from "../shared/App";
import "source-map-support/register";
import "isomorphic-fetch";
// require('es6-promise').polyfill();
// import ampHtml from './amp-document'
const app = express();

app.use(cors());
app.use(express.static("public"));

app.get("/api/categories", (req, res) => {

  res.json(
      [
        {
          "title": "UX Design",
          "subjects": [
            {
              "title": "Accessibility Design",
              "description": "Adipisci ta adipisci laudantium impedit optio utem voluptatibus.",
              "events": [
                {
                  "title": "Event Name One",
                  "description": "Lorem ipsum dolor sit amet,od repellendus magnam, facere sint, ratione itaque minus, officiis quuaerat!",
                  "link": "https://www.meetup.com/"
                },
                {
                  "title": "Event Name Two",
                  "description": "Lorem ipsum dolor sit amet,od repellendus magnam, facere sint, ratione itaque minus, officiis quuaerat!",
                  "link": "https://www.meetup.com/"
                },
              ],
              "courses": [
                {
                  "title": "Course Name One",
                  "description": "Lorem ipsum dolor sit amet,od repellendus magnam, facere sint, ratione itaque minus, officiis quuaerat!",
                  "link": "https://www.udacity.com/"
                },
                {
                  "title": "Course Name Two",
                  "description": "Lorem ipsum dolor sit amet,od repellendus magnam, facere sint, ratione itaque minus, officiis quuaerat!",
                  "link": "https://www.udacity.com/"
                },
                {
                  "title": "Course Name Three",
                  "description": "Lorem ipsum dolor sit amet,od repellendus magnam, facere sint, ratione itaque minus, officiis quuaerat!",
                  "link": "https://www.udacity.com/"
                }
              ],
              "furtherReading": [
                {
                  "title": "Blog Post One",
                  "description": "Lorem ipsum dolor sit amet,od repellendus magnam, facere sint, ratione itaque minus, officiis quuaerat!",
                  "link": "https://www.medium.com/"
                },
                {
                  "title": "Blog Post Two",
                  "description": "Lorem ipsum dolor sit amet,od repellendus magnam, facere sint, ratione itaque minus, officiis quuaerat!",
                  "link": "https://www.medium.com/"
                }
              ]
            }
          ]
        },
        {
          "title": "Front End Development",
          "subjects": [
            {
              "title": "React",
              "description": "Adipisci ta adipisci laudantium impedit optio utem voluptatibus.",
              "events": [
                {
                  "title": "Event Name One",
                  "description": "Lorem ipsum dolor sit amet,od repellendus magnam, facere sint, ratione itaque minus, officiis quuaerat!",
                  "link": "https://www.meetup.com/"
                },
                {
                  "title": "Event Name Two",
                  "description": "Lorem ipsum dolor sit amet,od repellendus magnam, facere sint, ratione itaque minus, officiis quuaerat!",
                  "link": "https://www.meetup.com/"
                },
              ],
              "courses": [
                {
                  "title": "Course Name One",
                  "description": "Lorem ipsum dolor sit amet,od repellendus magnam, facere sint, ratione itaque minus, officiis quuaerat!",
                  "link": "https://www.udacity.com/"
                },
                {
                  "title": "Course Name Two",
                  "description": "Lorem ipsum dolor sit amet,od repellendus magnam, facere sint, ratione itaque minus, officiis quuaerat!",
                  "link": "https://www.udacity.com/"
                },
                {
                  "title": "Course Name Three",
                  "description": "Lorem ipsum dolor sit amet,od repellendus magnam, facere sint, ratione itaque minus, officiis quuaerat!",
                  "link": "https://www.udacity.com/"
                }
              ],
              "furtherReading": [
                {
                  "title": "Blog Post One",
                  "description": "Lorem ipsum dolor sit amet,od repellendus magnam, facere sint, ratione itaque minus, officiis quuaerat!",
                  "link": "https://www.medium.com/"
                },
                {
                  "title": "Blog Post Two",
                  "description": "Lorem ipsum dolor sit amet,od repellendus magnam, facere sint, ratione itaque minus, officiis quuaerat!",
                  "link": "https://www.medium.com/"
                }
              ]
            },
            {
              "title": "Angular 2",
              "description": "Adipisci ta adipisci laudantium impedit optio utem voluptatibus.",
              "events": [
                {
                  "title": "Event Name One",
                  "description": "Lorem ipsum dolor sit amet,od repellendus magnam, facere sint, ratione itaque minus, officiis quuaerat!",
                  "link": "https://www.meetup.com/"
                },
                {
                  "title": "Event Name Two",
                  "description": "Lorem ipsum dolor sit amet,od repellendus magnam, facere sint, ratione itaque minus, officiis quuaerat!",
                  "link": "https://www.meetup.com/"
                },
              ],
              "courses": [
                {
                  "title": "Course Name One",
                  "description": "Lorem ipsum dolor sit amet,od repellendus magnam, facere sint, ratione itaque minus, officiis quuaerat!",
                  "link": "https://www.udacity.com/"
                },
                {
                  "title": "Course Name Two",
                  "description": "Lorem ipsum dolor sit amet,od repellendus magnam, facere sint, ratione itaque minus, officiis quuaerat!",
                  "link": "https://www.udacity.com/"
                },
                {
                  "title": "Course Name Three",
                  "description": "Lorem ipsum dolor sit amet,od repellendus magnam, facere sint, ratione itaque minus, officiis quuaerat!",
                  "link": "https://www.udacity.com/"
                }
              ],
              "furtherReading": [
                {
                  "title": "Blog Post One",
                  "description": "Lorem ipsum dolor sit amet,od repellendus magnam, facere sint, ratione itaque minus, officiis quuaerat!",
                  "link": "https://www.medium.com/"
                },
                {
                  "title": "Blog Post Two",
                  "description": "Lorem ipsum dolor sit amet,od repellendus magnam, facere sint, ratione itaque minus, officiis quuaerat!",
                  "link": "https://www.medium.com/"
                }
              ]
            },
            {
              "title": "Vue js",
              "description": "Adipisci ta adipisci laudantium impedit optio utem voluptatibus.",
              "events": [
                {
                  "title": "Event Name One",
                  "description": "Lorem ipsum dolor sit amet,od repellendus magnam, facere sint, ratione itaque minus, officiis quuaerat!",
                  "link": "https://www.meetup.com/"
                },
                {
                  "title": "Event Name Two",
                  "description": "Lorem ipsum dolor sit amet,od repellendus magnam, facere sint, ratione itaque minus, officiis quuaerat!",
                  "link": "https://www.meetup.com/"
                },
              ],
              "courses": [
                {
                  "title": "Course Name One",
                  "description": "Lorem ipsum dolor sit amet,od repellendus magnam, facere sint, ratione itaque minus, officiis quuaerat!",
                  "link": "https://www.udacity.com/"
                },
                {
                  "title": "Course Name Two",
                  "description": "Lorem ipsum dolor sit amet,od repellendus magnam, facere sint, ratione itaque minus, officiis quuaerat!",
                  "link": "https://www.udacity.com/"
                },
                {
                  "title": "Course Name Three",
                  "description": "Lorem ipsum dolor sit amet,od repellendus magnam, facere sint, ratione itaque minus, officiis quuaerat!",
                  "link": "https://www.udacity.com/"
                }
              ],
              "furtherReading": [
                {
                  "title": "Blog Post One",
                  "description": "Lorem ipsum dolor sit amet,od repellendus magnam, facere sint, ratione itaque minus, officiis quuaerat!",
                  "link": "https://www.medium.com/"
                },
                {
                  "title": "Blog Post Two",
                  "description": "Lorem ipsum dolor sit amet,od repellendus magnam, facere sint, ratione itaque minus, officiis quuaerat!",
                  "link": "https://www.medium.com/"
                }
              ]
            }
          ]
        }
      ]

  )
})

app.get("*", (req, res, next) => {
  const store = configureStore();

  const promises = routes.reduce((acc, route) => {
    if (matchPath(req.url, route) && route.component && route.component.initialAction) {
      acc.push(Promise.resolve(store.dispatch(route.component.initialAction(req.url))));
    }
    return acc;
  }, []);


  Promise.all(promises)
    .then(() => {
      const initialData = store.getState();
      const context = {initialData};
      const markup = renderToString(
        <Provider store={store}>
          <StaticRouter location={req.url} context={context}>
            <App />
          </StaticRouter>
        </Provider>
      );
      // <link rel="stylesheet" href="/css/main.css">
      // <script src="/bundle.js" defer></script>

      // <script async src="https://cdn.ampproject.org/v0.js"></script>
    //   res.send(`
    // <!doctype html>
    //   <html ⚡ lang="en">
    //     <head>
    //       <meta charset="utf-8" />
    //       <link rel="canonical" href="/article.html">
    //
    //       <link rel="shortcut icon" href="amp_favicon.png">
    //
    //       <title>News Article</title>
    //       <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">
    //
    //       <script async src="https://cdn.ampproject.org/v0.js"></script>
    //       <style amp-custom>
    //
    //         body {
    //           width: auto;
    //           margin: 0;
    //           padding: 0;
    //         }
    //
    //         header {
    //           background: Tomato;
    //           color: white;
    //           font-size: 2em;
    //           text-align: center;
    //         }
    //
    //         h1 {
    //           margin: 0;
    //           padding: 0.5em;
    //           background: white;
    //           box-shadow: 0px 3px 5px grey;
    //         }
    //
    //         p {
    //           padding: 0.5em;
    //           margin: 0.5em;
    //         }
    //
    //       </style>
    //       <style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style><noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>
    //
    //
    //     </head>
    //     <body>
    //       <header>
    //         News Site
    //       </header>
    //       <div id="root">${markup}</div>
    //     </body>
    //   </html>`);

      res.send(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>Unipro U</title>
            <link rel="stylesheet" href="/css/main.css">
            <script src="/bundle.js" defer></script>

            <script>window.__initialData__ = ${serialize(initialData)}</script>
          </head>

          <body>
            <div id="root">${markup}</div>
          </body>
        </html>
      `);
    })
    .catch(next);
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is listening");
});

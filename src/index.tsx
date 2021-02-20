import React from "react";
import ReactDOM from "react-dom";
import { WEB_CREATE_COURSE } from "./assets/courses/WebCreate";
import Section from "./pages/Section";
import { Route, BrowserRouter } from "react-router-dom";
import { GAME_CREATE_COURSE } from "./assets/courses/GameCreate";
import { courceList } from "./assets/courses";
import Course from "./pages/Course";
import Home from "./pages/Home";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      {courceList.map((cource, i) => (
        <Route
          exact
          path={`/${cource.metaName}`}
          component={() => <Course value={cource} />}
        />
      ))}

      {WEB_CREATE_COURSE.sections.map((section, i) => (
        <Route
          exact
          path={`/web-create/${i + 1}`}
          component={() => <Section value={section} />}
        />
      ))}

      {GAME_CREATE_COURSE.sections.map((section, i) => (
        <Route
          exact
          path={`/game-create/${i + 1}`}
          component={() => <Section value={section} />}
        />
      ))}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

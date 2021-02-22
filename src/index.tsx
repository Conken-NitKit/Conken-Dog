import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter } from "react-router-dom";
import { courceList } from "./assets/courses";
import Home from "./pages/Home";
import Course from "./pages/Course";
import Section from "./pages/Section";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route exact path="/" component={Home} />

      {courceList.map((cource) => (
        <Route
          exact
          path={`/${cource.metaName}`}
          component={() => <Course value={cource} />}
        />
      ))}

      {courceList.map((cource) =>
        cource.sections.map((section, i) => (
          <Route
            exact
            path={`/${cource.metaName}/${i + 1}`}
            component={() => <Section value={section} />}
          />
        ))
      )}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

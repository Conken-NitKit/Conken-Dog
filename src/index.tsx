import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter, RouteComponentProps } from "react-router-dom";
import { courseList } from "./assets/courses";
import Home from "./pages/Home";
import Course from "./pages/Course";
import Section from "./pages/Section";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import { userContext } from "./contexts/userContext";
import { defaultUserInfo, IUser } from "./interfaces/User";
import { IKnowledge } from "./interfaces/Knowledge";
import { knowledgesContext } from "./contexts/knowledgesContext";

const Root = () => {
  const [user, setUser] = useState<IUser>(defaultUserInfo);
  const [knowledges, setKnowledges] = useState<IKnowledge[]>([]);
  return (
    <userContext.Provider value={{ user: user, setUser: setUser }}>
      <knowledgesContext.Provider
        value={{ knowledges: knowledges, setKnowledges: setKnowledges }}
      >
        <BrowserRouter>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signin" component={SignIn} />

          {courseList.map((course) => (
            <Route
              exact
              key={course.metaName}
              path={`/${course.metaName}`}
              component={(routeComponentProps: RouteComponentProps) => (
                <Course value={course} {...routeComponentProps} />
              )}
            />
          ))}

          {courseList.map((course) =>
            course.sections.map((section, index) => (
              <Route
                exact
                key={`${course.metaName}/${index}`}
                path={`/${course.metaName}/${index + 1}`}
                component={(routeComponentProps: RouteComponentProps) => (
                  <Section value={section} {...routeComponentProps} />
                )}
              />
            ))
          )}
        </BrowserRouter>
      </knowledgesContext.Provider>
    </userContext.Provider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById("root")
);

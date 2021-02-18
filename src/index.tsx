import React from "react";
import ReactDOM from "react-dom";
import { WEB_CREATE } from "./assets/cources/WebCreate";
import Section from "./pages/Section";
import { Route, BrowserRouter } from "react-router-dom";
import { GAME_CREATE } from "./assets/cources/GameCreate";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {WEB_CREATE.map((section, i) => (
        <Route
          exact
          path={`/web-create/${i + 1}`}
          component={() => <Section value={section} />}
        />
      ))}

      {GAME_CREATE.map((section, i) => (
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

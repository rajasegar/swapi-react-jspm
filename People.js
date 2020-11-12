import React from "react";
import { BrowserRouter, Route  } from "react-router-dom";
import PeoplePage from "./PeoplePage.js";

import htm from 'htm';

export default function People(props) {
  const html = htm.bind(React.createElement);
    return html`
    <${BrowserRouter}>
      <${Route} path="/people/:personId" component=${PeoplePage} />
      <${Route} path="/people" component=${PeoplePage} exact />
    </${BrowserRouter}>
  `;
};

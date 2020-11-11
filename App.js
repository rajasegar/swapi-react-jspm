import React from 'react';
import htm from 'htm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './Home.js';
import People from './People.js';
import Planets from './Planets.js';

const html = htm.bind(React.createElement);

const App = () => {
  return html`
  <${Router}>
      <div>
        <nav>
          <ul>
            <li>
              <${Link} to="/">Home</${Link}>
            </li>
            <li>
              <${Link} to="/people">People</${Link}>
            </li>
            <li>
              <${Link} to="/planets">Planets</${Link}>
            </li>
          </ul>
        </nav>
        <main>
        <${Switch}>
          <${Route} path="/people">
            <${People} />
          </${Route}>
          <${Route} path="/planets">
            <${Planets} />
          </${Route}>
          <${Route} path="/">
            <${Home} />
          </${Route}>
        </${Switch}>
        </main>
      </div>
    </${Router}>
  `;
};

export default App;

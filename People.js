import React from 'react';
import htm from 'htm';
const html = htm.bind(React.createElement);

export default function People() {
  let people = [];

  (async () => {
    const response = await fetch('https://swapi.dev/people/');
    people = await response.json();
  })();

  const list = people.map((p,index) => {
    return html`
    <li><a href="/people/${++index}">${p.name}</a></li>
    `;
  }).join('\n');

  return html`
    <h1>People</h1>
    <ul>
    ${list}
    </ul>
    `;
}

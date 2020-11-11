import React from 'react';
import htm from 'htm';
const html = htm.bind(React.createElement);

export default function People() {
  return html`<h1>Home</h1>`;
}

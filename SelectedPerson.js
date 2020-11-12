import { useState, useEffect, createElement} from "react";
import htm from 'htm';
import { Link } from 'react-router-dom';

export default function SelectedPerson(props) {

  const html = htm.bind(createElement);

  const person = props.selected;
  if(!person) {
    return html`<div>Please select a person</div>`;
  } else {
    return html`
    <h1>${person.name}</h1>
    <table>
    <tbody>
    <tr><td>Height:</td><td>${person.height}</td></tr>
    <tr><td>Mass:</td><td>${person.mass}</td></tr>
    <tr><td>Hair color:</td><td>${person.hair_color}</td></tr>
    <tr><td>Gender:</td><td>${person.gender}</td></tr>
    <tr><td>Birth year:</td><td>${person.birth_year}</td></tr>
    <tr><td>Homeworld:</td><td>${person.homeworld}</td></tr>
    </tbody>
    </table>
    `;
  }

}

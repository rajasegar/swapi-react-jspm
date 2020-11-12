import { useState, useEffect, createElement} from "react";
import htm from 'htm';
import { Link } from 'react-router-dom';
import SelectedPerson from './SelectedPerson.js';

export default function PeoplePage(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [selected, setSelected] = useState(null);

  const html = htm.bind(createElement);

  useEffect(() => {
    fetch('https://swapi.dev/api/people/')
      .then(res => res.json())
      .then(result => {
        setIsLoaded(true);
        setItems(result.results);
      },
        (error) => {
          setIsLoaded(true);
          setError(error);
        })
  }, []);

  useEffect(() => {
  function selectPeople(ev, id) {
    ev.preventDefault();
    setSelected(id);
  }
  })

  if(error) {
    return html`<div>Error: { error.message}</div>`;
  } else if(!isLoaded) {
    return html`<div>Loading...</div>`;
  } else {
    return html`
    <ul>
    ${items.map((item,index) =>  { 
      return html`
        <li key=${index}>
        <a href="#" onClick=${(ev) => selectPeople(ev, ++index) }>${item.name}</a>
        </li>
        `;
    _})
    }
    </ul>
    <${SelectedPerson} selected=${selected}/>
    
    `;
  }

}

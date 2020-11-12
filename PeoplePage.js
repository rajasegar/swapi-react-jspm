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
    const [,, id] = location.pathname.split('/');
    if(items.length > 0) {
        setSelected(items[id]);
    }
    fetch('https://swapi.dev/api/people/')
      .then(res => res.json())
      .then(result => {
        setIsLoaded(true);
        const _items = result.results;
        setItems(_items);
        setSelected(_items[id]);
      },
        (error) => {
          setIsLoaded(true);
          setError(error);
        })
  }, []);


  if(error) {
    return html`<div>Error: { error.message}</div>`;
  } else if(!isLoaded) {
    return html`<div>Loading...</div>`;
  } else {
    return html`
    <div className="grid">
    <div className="left-col">
    <ul className="people-list">
    ${items.map((item,index) =>  { 
      return html`
        <li key=${index}>
        <${Link} to="/people/${index}">${item.name}</${Link}>
        </li>
        `;
    _})
    }
    </ul>
    </div>
    <div className="right-col">
    <${SelectedPerson} selected=${selected}/>
    </div>
    </div>
    
    `;
  }

}

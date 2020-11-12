import { useState, useEffect, createElement} from "react";
import htm from 'htm';
import { Link } from 'react-router-dom';

export default function SelectedPerson(props) {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [person, setPerson] = useState(null);

  const html = htm.bind(createElement);

  useEffect(() => {
    if(props.selected) {
      const url = `https://swapi.dev/api/people/${props.selected}`;
      fetch(url)
        .then(res => res.json())
        .then(result => {
          setIsLoaded(true);
          setPerson(result);
        },
          (error) => {
            setIsLoaded(true);
            setPeopleErr(error);
          });
    }
  }, []);

  if(error) {
    return html`<div>Error: { error.message}</div>`;
  } else if(!isLoaded) {
    return html`<div>Loading...</div>`;
  } else {
    return html`
    <h1>${person && person.name}</h1>
    `;
  }

}

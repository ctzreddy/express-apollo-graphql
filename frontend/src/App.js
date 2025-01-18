
import './App.css';
import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import Get_All_Characters from './graphql/useGraphClient';


function App() {

  const { loading, error, data } = useQuery(Get_All_Characters);
  const [response, setresponse] = useState(data);

  useEffect(() => {
    //console.log(loading);
    if (!loading) {
      console.log(data.characters);
      setresponse(data);
    }
  }, [loading]);

  return (
    <div className="image-list">
      <h2>Characters List</h2>
      <ul> {response &&
        response.characters.map((character) =>
        (<li key={character.id}> <img src={character.image} alt={character.name} />
          <p>{character.name}</p> <p>{character.origin}</p> </li>))}
      </ul>
    </div>
  );
}

export default App;

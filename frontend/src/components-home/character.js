import '../App.css';

function Character(props) {
    const character = props.character;
    //console.log(character);

    return (
        <div>
          <h3>{character.name}</h3>
          <p>Origin: {character.origin}</p>
          <img src={character.image} alt={character.name} />
        </div>
      );
}

export default Character;
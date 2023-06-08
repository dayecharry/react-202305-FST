import { useEffect, useState } from 'react';
import '../styles/App.css';
import Limit from './Limit';

function App() {
  const [listPokemon, setListPokemon] = useState([]);
  const [count, setCount] = useState(10);

  const handleCount = (userValue) => {
    setCount(userValue);
  };

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${count}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setListPokemon(data.results);
      });
  }, [count]);
  //[] --> una sola vez cuando carga la pagina
  //[buscador] --> se va a ejecutar cada vez que esa var cambia de valor
  // no pones el array--> se ejecuta cada vez que se carga el componente (seria lo mismo que no poner el useEffect)
  /*
  const mapPokemons = () => {
    return listPokemon.map((pokemon, i) => {
      return <li key={i}>{pokemon.name}</li>;
    });
  };*/

  const liPokemon = listPokemon.map((pokemon, i) => {
    return <li key={i}>{pokemon.name}</li>;
  });
  //
  return (
    <div className="App">
      {/*<ul>{mapPokemons()}</ul> */}
      <Limit handleCount={handleCount} />
      <ul>{liPokemon}</ul>
    </div>
  );
}

export default App;

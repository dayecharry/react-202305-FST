import { useEffect, useState } from 'react';
import '../styles/App.css';
import axios from 'axios';
import Characters from './Characters';

function App() {
  const [listCharacters, setListCharacters] = useState([]);
  const [house, setHouse] = useState('gryffindor');
  const [favorites, setFavorites] = useState([]);

  const url = `https://hp-api.onrender.com/api/characters/house/${house}`;

  const handleSelect = (event) => {
    setHouse(event.target.value);
  };

  useEffect(() => {
    /* axios(url).then(
      (res) => {
        console.log(res.data);
      },
      (error) => {
        console.log(error);
      }
    );*/
    axios.get(url).then(
      (resp) => {
        setListCharacters(resp.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }, [house]);

  //js filter-->

  const addNewFavorite = (newFav) => {
    setFavorites([...favorites, newFav]);
  };

  return (
    <div className="App">
      <select name="" id="" onChange={handleSelect}>
        <option value="gryffindor">gryffindor</option>
        <option value="Ravenclaw">Ravenclaw</option>
        <option value="Hufflepuff">Hufflepuff</option>
        <option value="Slytherin">Slytherin</option>
      </select>
      <main>
        <Characters list={listCharacters} addNewFavorite={addNewFavorite} />

        {/* favoritos */}
      </main>
    </div>
  );
}

export default App;

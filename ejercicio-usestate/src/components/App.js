import '../styles/App.css';
import data from '../services/data.json';
import Listproduct from './ListProduct/ListProduct';
import { useState } from 'react';
import Filter from './Filter/Filter';

function App() {
  const [products, setProducts] = useState(data);
  const [filterName, setFilterName] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');

  const handleFilterCategory = (value) => {
    setFilterCategory(value);
  };

  const handleFilterName = (value) => {
    setFilterName(value);
  };

  const filteredProducts = products
    .filter((item) =>
      item.nombre.toLowerCase().includes(filterName.toLowerCase())
    )
    .filter((item) => {
      if (filterCategory === 'all') {
        return true;
      } else {
        return item.categoria.toLowerCase() === filterCategory;
      }
    });
  return (
    <div className="App">
      <Filter
        handleFilter={handleFilterName}
        handleCategory={handleFilterCategory}
      />
      <Listproduct list={filteredProducts} />
    </div>
  );
}

export default App;
/*
1.- crear un json(fichero json con los datos)
2.- Map del array de datos  (componente lista, componente para la tarjeta)
3.- buscar input para el filtro(componente para el filtro)
4.- var de estado buscador del filtro.
5.- var de estado  para la lista de elementos--> array
*/

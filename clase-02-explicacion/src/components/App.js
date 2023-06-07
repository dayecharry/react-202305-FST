import { useState } from 'react';
import '../styles/App.css';

function App() {
  // defino una variable de estado con valor
  const [mensaje, setMensaje] = useState('hola');
  const [nombre, setNombre] = useState('');

  const handleInput = (event) => {
    setNombre(event.target.value);
  };

  const handleClick = (event) => {
    console.log('me han clicado');
    // cambio el valor de la variable estados
    setMensaje(`el usuario ${nombre} se ha registrado`);
    console.log(mensaje);
  };

  console.log('se renderizo el componente app');

  return (
    <div className="App">
      <input type="text" onChange={handleInput} />
      <button onClick={handleClick}>haga click</button>
      <p>{mensaje}</p>
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

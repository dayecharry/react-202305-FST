import '../styles/App.css';
import Home from './Home';
import Boton from './Boton';
import imagen from '../images/a.jpeg';

function App() {
  const name = 'Dayana';
  const students = ['cristian', 'victor', 'juan', 'alberto', 'mar'];

  return (
    <div className="App">
      <h1>Esta es mi primera web</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem
        accusamus exercitationem alias reiciendis voluptatem, ad fugit similique
        numquam optio ex dolor eius cumque perferendis quis qui officiis
        molestiae voluptate sunt?
      </p>
      <Boton estilo="azul" texto="reset" />
      {name}
      <Home saludo="hello">
        <p>lorem</p>
        <h6>bla bla</h6>
      </Home>

      <img src={imagen} alt="" className="background" />
      <ul>
        {students.map((eachStudent, i) => (
          <li key={i}>{eachStudent} </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

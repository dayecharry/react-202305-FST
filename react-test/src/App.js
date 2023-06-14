import logo from './logo.svg';
import './App.css';
import Logo from './components/Logo/Logo';

function App() {
  const printHello = () => {
    console.log('Imprimir Hello');
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <Logo img={logo} printHello={printHello} />
    </div>
  );
}

export default App;

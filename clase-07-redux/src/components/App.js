import '../styles/App.css';
import CounterButton from './CounterButton';
import CounterView from './CounterView';

function App() {
  return (
    <div className="App">
      <h1>Titulo de mi pag</h1>
      <CounterView />
      <CounterButton />
    </div>
  );
}

export default App;

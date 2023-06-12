import '../styles/App.css';
import { UserContext, useUserContext } from './Context/userContext';
import Dos from './Dos';
import Uno from './Uno';
import Users from './Users';

function App() {
  const userContext = useUserContext();

  return (
    <div className="App">
      <UserContext.Provider value={userContext}>
        <Uno />
        <Dos />
        <Users />
      </UserContext.Provider>
    </div>
  );
}

export default App;

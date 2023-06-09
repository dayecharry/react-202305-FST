import { Routes, Route } from 'react-router-dom';
import '../styles/App.css';
import NavBar from './NavBar/Navbar';
import Home from './Home/Home';
import Contact from './Contact/Contact';
import NotFound from './NotFound';
import Detail from './Detail/Detail';

function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact value={'valor'} />} />
        <Route path="/product/:id" element={<Detail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

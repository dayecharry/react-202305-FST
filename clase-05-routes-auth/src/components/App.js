import { Routes, Route, useNavigate } from 'react-router-dom';
import '../styles/App.css';
import NavBar from './NavBar/Navbar';
import Home from './Home/Home';
import Contact from './Contact/Contact';
import NotFound from './NotFound';
import Detail from './Detail/Detail';
import Login from './Login/Login';
import { useState } from 'react';
import Profile from './Profile/Profile';
import AuthRoute from './AuthRoute/AuthRoute';

const userList = [
  {
    email: 'anacleta@upgrade.com',
    password: '123456',
    name: 'Ana',
    role: 'admin',
  },
  {
    email: 'perensejo@upgrade.com',
    password: '987456',
    name: 'Pablo',
    role: 'client',
  },
];

function App() {
  // null porque aun no está  definido el usuario
  const [user, setUser] = useState(null);
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();

  //formData es lo que ya llenado el usuario
  const loginUser = (formData) => {
    // este bloque de código se sustituira por una  peticion al servidor post para hacer el login
    console.log(formData);
    const existUser = userList.find((user) => {
      return (
        user.email === formData.email && user.password === formData.password
      );
    });
    //

    if (existUser) {
      setUser(existUser);
      setLoginError('');
      navigate('/');
    } else {
      setUser(false);
      setLoginError('Usuario o contaseña incorrecta');
    }
  };

  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact value={'valor'} />} />
        <Route path="/product/:id" element={<Detail />} />
        <Route
          path="/login"
          element={<Login loginUser={loginUser} loginError={loginError} />}
        />
        <Route
          path="/profile"
          element={
            <AuthRoute user={user} component={<Profile user={user} />} />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

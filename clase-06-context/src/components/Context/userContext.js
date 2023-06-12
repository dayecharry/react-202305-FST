import { createContext, useState } from 'react';

export const UserContext = createContext();

export const useUserContext = () => {
  const [state, setState] = useState({
    users: ['pepe', 'ana', 'maricarmen'],
    products: ['zapatillas', 'vestido', 'pantalon'],
  });

  const addUser = (newUser) => {
    setState({ ...state, users: [...state.users, newUser] });
  };

  return { ...state, addUser };
};

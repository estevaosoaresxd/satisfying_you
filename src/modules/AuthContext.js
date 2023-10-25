import {createContext, useState, useContext} from 'react';
import {auth} from '../shared/firebase/config';
import {AuthSignOut} from '../services/auth_service';

const AuthContext = createContext({});

const AuthProvider = ({children}) => {
  const [user, setUser] = useState({});

  const updateUser = userInfo => {
    setUser(userInfo);
  };

  const isAuth = () => {
    let userInfo = auth.currentUser;

    if (userInfo != null) {
      updateUser(userInfo);
    }

    return userInfo;
  };

  const signOutAuth = async () => {
    setUser({});
    await AuthSignOut();
  };

  return (
    <AuthContext.Provider value={{user, updateUser, isAuth, signOutAuth}}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within a AuthContextProvider');
  }

  return context;
};

export {AuthProvider, useAuth};

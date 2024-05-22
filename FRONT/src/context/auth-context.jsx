<<<<<<< HEAD

import React,{createContext, useState, useContext } from 'react';

const AuthContext = createContext({});

export const AuthContextProvider = ({ children }) => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
    name: '',
    address:'',
  });

  return (
    <AuthContext.Provider value={{ credentials, setCredentials }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook to use the auth context
export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContext
=======

import React,{createContext, useState, useContext } from 'react';

const AuthContext = createContext({});

export const AuthContextProvider = ({ children }) => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
    name: '',
    address:'',
  });

  return (
    <AuthContext.Provider value={{ credentials, setCredentials }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook to use the auth context
export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContext
>>>>>>> e87d2061a4521c03d4dd8d318fd8fb257754b307

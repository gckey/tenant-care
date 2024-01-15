import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const userToken = localStorage.getItem('userToken');
    if (userToken) {
      setIsAuthenticated(true);
    }
  }, []);

  const setAuthenticationStatus = (status) => {
    setIsAuthenticated(status);
    if (!status) {
      localStorage.removeItem('userToken'); // Clear token on logout
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, setAuthenticationStatus }}>
      {children}
    </AuthContext.Provider>
  );
};

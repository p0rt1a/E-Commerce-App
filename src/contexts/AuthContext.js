import { useState, useContext, createContext } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  const login = (data) => {
    setLoggedIn(true);
    setUser(data);
    localStorage.setItem("user_id", data.id);
  };

  const logout = () => {
    setLoggedIn(false);
    localStorage.removeItem("user_id");
    setUser(null);
  };

  const values = {
    user,
    loggedIn,
    login,
    logout,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };

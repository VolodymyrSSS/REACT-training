import { createContext } from "react";
import axios from "axios";

const AuthContext = createContext({});

export const AuthContextProvider = ({ children }) => {

  const loginApiCall = async (payload) => {
    await axios.post("http://localhost:4000/auth/login", payload, {
      withCredentials: true,
    });
  };

  return <AuthContext.Provider value={{ loginApiCall }}>
    { children }
  </AuthContext.Provider>
}

export default AuthContext;
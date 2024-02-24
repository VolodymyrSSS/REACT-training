import { useState, createContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({});

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    let userProfile = localStorage.getItem("userProfile");
    if (userProfile) {
      return JSON.parse(userProfile);
    }
    return null;
  });

  const navigate = useNavigate();

  const loginApiCall = async (payload) => {
    await axios.post("http://localhost:4000/auth/login", payload, {
      withCredentials: true,
    });

    const apiResponse = await axios.get("http://localhost:4000/user-profile", {
      withCredentials: true,
    });
    setUser(apiResponse.data);
    localStorage.setItem("userProfile", JSON.stringify(apiResponse.data));
    navigate("/home");
  };

  return <AuthContext.Provider value={{ loginApiCall, user }}>
    { children }
  </AuthContext.Provider>
}

export default AuthContext;
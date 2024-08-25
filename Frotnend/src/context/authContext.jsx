import { createContext, useState } from "react";
import { useContext } from "react";

export const AuthContext = createContext();

export const useAuthContext = () => {
    return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
    const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem("Secret")) || null);

  return <AuthContext.Provider value={{authUser, setAuthUser}}>{children}</AuthContext.Provider>;
};

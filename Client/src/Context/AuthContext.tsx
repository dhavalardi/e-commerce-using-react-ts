import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  logout: (value: boolean) => void;
  login: (value: boolean) => void;
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  logout: () => {} ,// Initial empty function
  login: () => {} // Initial empty function
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("====token=======", token);
    if(token){
      setIsAuthenticated(true);
    }
  }, [isAuthenticated]);

const login = () => {
  setIsAuthenticated(true)
}


const logout = () => {
  localStorage.clear();
  setIsAuthenticated(false)
}

  const authContextValue: AuthContextType = {
    isAuthenticated: isAuthenticated,
    logout: logout,
    login : login,
  };

  console.log(isAuthenticated);

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

import { createContext, useState } from "react";
export const authContext = createContext(null);

export default function AuthContext({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(
    window.localStorage.getItem("token") || false
  );

  return (
    <authContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
      }}
    >
      {children}
    </authContext.Provider>
  );
}

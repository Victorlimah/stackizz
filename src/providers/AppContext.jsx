import { useState, createContext } from "react";
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [ user, setUser ] = useState(null);
  const [ API, setAPI] = useState("https://victorlimah-drivenpass.herokuapp.com");

  return (
    <AppContext.Provider value={{ user, setUser, API, setAPI }}>
      {children}
    </AppContext.Provider>
  );
}

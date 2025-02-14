"use client"

import { createContext, useContext, useState } from "react";

const CurrentUserContext = createContext();

export function CurrentUserProvider({ children }) {

   const [currentUser, setCurrentUser] = useState(false);

   return (

      <CurrentUserContext.Provider value={{currentUser, setCurrentUser}}>
         {children}
      </CurrentUserContext.Provider>
   )
}

export function useCurrentUser() {

   return useContext(CurrentUserContext);
}
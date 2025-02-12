"use client"

import { createContext, useState, useContext } from "react"

const AccountsContext = createContext();

export function AccountsProvider({ children }) {
   const [accounts, setAccounts] = useState([{
      email: "test@gmail.com",
      username: "test",
      password: "test"
   }]);

   return (
      <AccountsContext.Provider value={{ accounts, setAccounts }}>
         {children}
      </AccountsContext.Provider>
   )
}

export function useAccounts() {
   return useContext(AccountsContext)
}
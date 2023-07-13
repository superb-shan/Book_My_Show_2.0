import React, { useState, createContext } from "react";

export const NavbarContext = createContext();

const NavbarProvider = ({ children }) => {

    const [isCityModalOpen, setIsCityModalOpen] = useState(true);
    const [city, setCity] = useState("Delhi-NCR");
    const [userName, setUserName] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  
    return (
      <NavbarContext.Provider
        value={{
            isCityModalOpen,
            setIsCityModalOpen,
            city,
            setCity,
            userName,
            setUserName,
            isLoggedIn,
            setIsLoggedIn
        }}
      >
        {children}
      </NavbarContext.Provider>
    );
  };
  
  export default NavbarProvider;
  
import React, { useState, createContext } from "react";

export const NavbarContext = createContext();

const NavbarProvider = ({ children }) => {

    const [isCityModalOpen, setIsCityModalOpen] = useState(true);
    const [city, setCity] = useState("Delhi-NCR");
  
  
    return (
      <NavbarContext.Provider
        value={{
            isCityModalOpen,
            setIsCityModalOpen,
            city,
            setCity
        }}
      >
        {children}
      </NavbarContext.Provider>
    );
  };
  
  export default NavbarProvider;
  
import React, { createContext, useState } from 'react';

export const CarContext = createContext();

export const CarProvider = ({ children }) => {
  const [carrosRegistrados, setCarrosRegistrados] = useState([]);
  const [rentarCarros, setRentarCarros] = useState([]);

  return (
    <CarContext.Provider value={{ carrosRegistrados, setCarrosRegistrados, rentarCarros, setRentarCarros }}>
      {children}
    </CarContext.Provider>
  );
};

'use client'
import { createContext, useState } from "react";

export const display = createContext();

const DisplayProvider = ({ children }) => {
  const [openInvestment, setOpenInvestment] = useState(false);
  const [openGuarantee, setOpenGuarantee] = useState(false);

  const setInvestment = () => {
    setOpenInvestment(!openInvestment);
  };
  const setGuaranteeModal = () => {
    setOpenGuarantee(!openGuarantee);
  };

  return (
    <display.Provider value={{ setInvestment, openInvestment, setGuaranteeModal, openGuarantee }}>
      {children}
    </display.Provider>
  );
};

export default DisplayProvider;

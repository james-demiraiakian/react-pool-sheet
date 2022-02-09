import { createContext, useContext, useState } from 'react';

export const PartContext = createContext();

const PartProvider = ({ children }) => {
  const [part, setPart] = useState('');
  const partValue = { part, setPart };

  return <PartContext.Provider value={partValue}>{children}</PartContext.Provider>;
};

const usePart = () => {
  const context = useContext(PartContext);

  if (context === undefined) {
    throw new Error('usePart function must be rendered inside a PartProvider element');
  }
  return context;
};

export { PartProvider, usePart };

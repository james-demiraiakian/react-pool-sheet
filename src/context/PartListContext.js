import { createContext, useContext, useState } from 'react';

export const PartListContext = createContext();

const PartListProvider = ({ children }) => {
  const [list, setList] = useState([]);

  return <PartListContext.Provider value={{ list, setList }}>{children}</PartListContext.Provider>;
};

const useList = () => {
  const context = useContext(PartListContext);
  if (context === undefined) {
    throw new Error('useList function must be rendered inside a ListProvider element');
  }

  return context;
};

export { PartListProvider, useList };

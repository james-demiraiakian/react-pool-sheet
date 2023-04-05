import { createContext, useContext, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  // const [loading, setLoading] = useState(true);
  // const navigate = useNavigate();

  const userValue = { user, setUser };

  return <UserContext.Provider value={userValue}>{children}</UserContext.Provider>;
};

const useUser = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('useUser function must be rendered inside a UserProvider element');
  }

  return context;
};

export { UserProvider, useUser };

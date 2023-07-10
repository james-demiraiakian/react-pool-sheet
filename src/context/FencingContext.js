import { createContext, useContext, useEffect, useState } from 'react';
import { addFencer, getAllFencers } from '../services/fencers';

export const FencingContext = createContext();

const FencingProvider = ({ children }) => {
  const [fencers, setFencers] = useState([]);
  const [fencer, setFencer] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [tournament, setTournament] = useState({});

  const saveFencers = async (id) => {
    const temp = [];

    fencers.forEach((f) => {
      const tempF = { ...f, tournamentId: id };
      temp.push(tempF);
    });

    setFencers(temp);

    temp.forEach((t) => addFencer(t));
  };

  const getFencers = async (tournamentId) => {
    const resp = await getAllFencers(tournamentId);
    return resp;
  };

  const fencerValue = {
    fencer,
    setFencer,
    fencers,
    setFencers,
    submitted,
    setSubmitted,
    saveFencers,
    getFencers,
    tournament,
    setTournament,
  };

  return <FencingContext.Provider value={fencerValue}>{children}</FencingContext.Provider>;
};

const useFencing = () => {
  const context = useContext(FencingContext);

  if (context === undefined) {
    throw new Error(
      'useFencing hook must be called inside a FencingProvider element, or one of its children'
    );
  }

  return context;
};

export { FencingProvider, useFencing };

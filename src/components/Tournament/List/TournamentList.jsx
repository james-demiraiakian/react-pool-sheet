import React, { useEffect, useState } from 'react';
import { getAllTournaments } from '../../../services/tournaments';
import TournamentDetails from '../Details/TournamentDetails';
import { useUser } from '../../../context/UserContext';

export default function TournamentList() {
  const [tournamentList, setTournamentList] = useState([]);
  const { user } = useUser();

  useEffect(() => {
    const fetch = async () => {
      const resp = await getAllTournaments(user.id);
      setTournamentList(resp);
    };
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <p>Historical Tournament List</p>
      {tournamentList.map((tournament, i) => (
        <div key={i}>
          <TournamentDetails {...tournament} />
        </div>
      ))}
    </div>
  );
}

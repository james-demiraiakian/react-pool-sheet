import React, { useEffect, useState } from 'react';
import { getAllTournaments } from '../../../services/tournaments';
import TournamentDetails from '../Details/TournamentDetails';

export default function TournamentList() {
  const [tournamentList, setTournamentList] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const resp = await getAllTournaments(1);
      setTournamentList(resp);
    };
    fetch();
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

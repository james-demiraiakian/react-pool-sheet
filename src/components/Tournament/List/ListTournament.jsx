import React, { useEffect, useState } from 'react';
import { getAllTournaments } from '../../../services/tournaments';

export default function ListTournament() {
  const [tournamentList, setTournamentList] = useState([]);
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      const resp = await getAllTournaments(1);
      setTournamentList(resp);
    };
    fetch();
  }, []);

  const handleClick = () => {
    setSelected(!selected);
  };

  return (
    <div>
      <p>Historical Tournament List</p>
      {tournamentList.map((tournament, i) => (
        <div key={i}>
          <div onClick={handleClick}>
            {/*break lines 25-29 and handleClick function out into own component. Will allow for clicking on individual tournaments to display data independently. Also fetch fencer and bout data to display on the tourny data page*/}
            Tournament {tournament.date}
            {selected === true && <div>{tournament.fencerArr}</div>}
          </div>
        </div>
      ))}
    </div>
  );
}

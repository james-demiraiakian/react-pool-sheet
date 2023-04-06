import React, { useState } from 'react';

export default function TournamentDetails(tournament) {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected(!selected);
  };

  console.log(tournament);
  return (
    <div>
      <div onClick={handleClick}>
        {/*break lines 25-29 and handleClick function out into own component. Will allow for clicking on individual tournaments to display data independently. Also fetch fencer and bout data to display on the tourny data page*/}
        Tournament {tournament.date}
        {selected === true && <div>{tournament.fencerArr}</div>}
      </div>
    </div>
  );
}

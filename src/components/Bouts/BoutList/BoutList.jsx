import React, { useEffect, useState } from 'react';
import { useFencing } from '../../../context/FencingContext';
import { getTournament } from '../../../services/tournaments';
import boutRandomizer from '../../../utils/boutRandomizer';
import BoutItem from '../BoutItem/BoutItem';

export default function BoutList() {
  const { tournament, getFencers } = useFencing();
  const [parts, setParts] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const res = await getFencers(tournament.id);
      setParts(res);
    };
    fetch();
  }, []);

  const fencerIds = [];

  parts.forEach((p) => {
    fencerIds.push(p.id);
  });

  // Plan to populate this array with name of each fencer
  console.log(fencerIds);
  const boutOrder = boutRandomizer(fencerIds);

  return (
    <div>
      <div>BoutList</div>
      <div>
        {boutOrder.map((bout, i) => (
          <div key={i}>
            <BoutItem bout={bout} />
          </div>
        ))}
      </div>
    </div>
  );
}

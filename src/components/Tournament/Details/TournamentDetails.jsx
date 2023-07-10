import React, { useEffect, useState } from 'react';
import { getAllFencers } from '../../../services/fencers';
import { getAllBouts } from '../../../services/bouts';

export default function TournamentDetails(tournament) {
  const [selected, setSelected] = useState(false);
  const [fencers, setFencers] = useState([]);
  const [bouts, setBouts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await getAllFencers(tournament.id);
      const resp2 = await getAllBouts(tournament.id);
      setFencers(resp);
      setBouts(resp2);
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = () => {
    setSelected(!selected);
  };

  return (
    <div>
      <div onClick={handleClick}>
        Tournament {tournament.date}
        {selected === true && (
          <div>
            <br></br>
            <div>Fencers</div>
            {fencers.map((fencer) => (
              <div key={fencer.id}>
                <div>{`Name: ${fencer.name}`}</div>
                <div>
                  {`Touches Scored: ${fencer.touchScore} | Touches Received: ${fencer.touchReceive} | Indicator: ${fencer.indicator} | Victories: ${fencer.victories} | Position: ${fencer.position}`}
                </div>
              </div>
            ))}
            <br></br>
            <div>Bouts</div>
            {bouts.map((bout, i) => (
              <div key={bout.id}>
                <div>{`Bout # ${i + 1}`}</div>
                <div>
                  {`Fencer 1: ${bout.fencerOneName} | Touches Scored: ${bout.tsOne} | Touches Received: ${bout.trOne} | Victor: ${bout.vOne}`}
                </div>
                <div>
                  {`Fencer 2: ${bout.fencerTwoName} | Touches Scored: ${bout.tsTwo} | Touches Received: ${bout.trTwo} | Victor: ${bout.vTwo}`}
                </div>
                <br></br>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

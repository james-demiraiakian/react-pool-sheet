import React from 'react';
import { useUser } from '../../../context/UserContext';
import { addTournament, updateTournament } from '../../../services/tournaments';
import { useFencing } from '../../../context/FencingContext';
import FencerListItem from '../../../views/FencerListItem/FencerListItem';

import { useNavigate } from 'react-router-dom';

export default function CreateTournament() {
  const navigate = useNavigate();
  const {
    fencer,
    setFencer,
    fencers,
    setFencers,
    submitted,
    setSubmitted,
    saveFencers,
    setTournament,
  } = useFencing();
  const { user } = useUser();

  const handleEnter = (e) => {
    e.preventDefault();
    const alsoTemp = fencer;
    const temp = {
      name: alsoTemp,
      position: 0,
      indicator: 0,
      touchScore: 0,
      touchReceive: 0,
      victories: 0,
      userId: user.id,
      tournamentId: 1,
    };
    setFencers([...fencers, temp]);
    setFencer('');
  };

  const handleChange = (e) => {
    e.preventDefault();
    setFencer(e.target.value);
  };

  const handleSubmit = async () => {
    const d = new Date();
    const tourn = await addTournament({
      date: d.toLocaleDateString(),
      userId: user.id,
    });

    setTournament(tourn);

    saveFencers(tourn.id);

    setSubmitted(!submitted);
  };

  const handleNext = async () => {
    navigate('/boutList');
  };

  return (
    <div>
      <div>Create Tournament</div>

      <div>
        <div>Enter fencers names</div>
        <form onSubmit={handleEnter}>
          <input type="text" value={fencer} onChange={handleChange}></input>
          <button type="submit">Add Fencer</button>
        </form>
        {!submitted ? (
          <div>
            {fencers.map((f, i) => (
              <div key={i}>
                <FencerListItem fencer={f} />
              </div>
            ))}
            <button onClick={handleSubmit}>Submit</button>
          </div>
        ) : (
          <div>
            Tournament Created
            {fencers.map((f, i) => (
              <div key={i}>
                <FencerListItem fencer={f} />
              </div>
            ))}
            <button onClick={handleNext}>Next</button>
          </div>
        )}
      </div>
    </div>
  );
}

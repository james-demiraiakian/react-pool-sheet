import React, { useState } from 'react';
import { usePart } from '../context/PartContext';
import { useList } from '../context/PartListContext';
import { v4 as uuid } from 'uuid';
import Match from './Match';
import './ParticipantList.css';

export default function ParticipantList() {
  const [partName, setPartName] = useState('');
  const { setPart } = usePart();
  const { list, setList } = useList();
  const [start, setStart] = useState(false);

  function updatePart() {
    if (!list) return;
    setPart(partName);
    setList([
      ...list,
      {
        name: partName,
        victories: 0,
        touchesScored: 0,
        touchesRecieved: 0,
        indicator: 0,
        placement: 0,
        id: uuid(),
        position: list.length + 1,
      },
    ]);
    setPartName('');
  }

  const handleAdd = (e) => {
    e.preventDefault();
    updatePart();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (list.length < 4) {
      alert('Please add 4 or more participants');
    } else if (list.length > 12) {
      alert('Can have no more than 12 participants');
    } else {
      e.preventDefault();
      setStart(true);
    }
  };

  const handleReset = () => {
    setStart(false);
    setPart('');
    setList([]);
  };

  return (
    <div className="participant-list">
      {!start ? (
        <>
          <h1>Pool Sheet</h1>
          <p>
            Pool sheet calculator for four to 12 participants. No more than 12 can be added due to
            the USFA not providing a bout order sheet for larger pools. If more than 12 participants
            are added, you will have to refresh the page. I plan to add a participant removal
            feature.
          </p>
          <form onSubmit={handleAdd}>
            <div>
              <input type="text" value={partName} onChange={(e) => setPartName(e.target.value)} />
              <button type="submit">Add</button>
            </div>
          </form>
          <form onSubmit={handleSubmit}>
            {list.map((person) => (
              <div key={person.id}>{person.name}</div>
            ))}
            <button type="submit">Accept</button>
          </form>
        </>
      ) : (
        <Match />
      )}
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

import React, { useState } from 'react';
import { usePart } from '../../context/PartContext';
import { useList } from '../../context/PartListContext';
import { v4 as uuid } from 'uuid';
import Match from '../Match/Match';
import './ParticipantList.css';

export default function ParticipantList() {
  const [partName, setPartName] = useState('');
  const { setPart, setPartOne, setPartTwo, setBout } = usePart();
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
        touchesReceived: 0,
        touchesCurrent: 0,
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
    setBout([]);
    setPartOne({});
    setPartTwo({});
  };

  const handleDelete = (e) => {
    const currentList = list;
    const newList = [];
    currentList.filter((per) => {
      if (per.id !== e.target.value) {
        newList.push(per);
      }
    });
    setList(newList);
  };

  return (
    <div className="participant-list">
      {!start ? (
        <>
          <h1>Pool Sheet</h1>
          <p>
            Pool sheet calculator for four to twelve participants. No more than 12 can be added due
            to the USFA not providing a bout order sheet for larger pools.
          </p>
          <form onSubmit={handleAdd}>
            <div>
              <input type="text" value={partName} onChange={(e) => setPartName(e.target.value)} />
              <button type="submit">Add</button>
            </div>
          </form>
          <div>
            {list.map((person) => (
              <div key={person.id}>
                <div>{person.name}</div>
                <button onClick={handleDelete} value={person.id}>
                  X
                </button>
              </div>
            ))}
            <button onClick={(e) => handleSubmit(e)}>Accept</button>
          </div>
        </>
      ) : (
        <Match />
      )}
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

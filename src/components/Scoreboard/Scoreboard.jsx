import React, { useEffect } from 'react';
import { usePart } from '../../context/PartContext';
import { useList } from '../../context/PartListContext';

// Remove setBout from context hook after connect to the numbered components
export default function Scoreboard() {
  const { list, setList } = useList();
  const { bout, setBout, partOne, setPartOne, partTwo, setPartTwo } = usePart();

  // Set up function to grab participant objects from list based on id returned from numbered component
  useEffect(() => {
    setPartOne(bout[0]);
    setPartTwo(bout[1]);
    console.log(bout);
    console.log(list);
    console.log(partOne);
    console.log(partTwo);
  }, [bout, list, partOne, partTwo, setPartOne, setPartTwo]);

  const handleAdd = (e) => {
    e.preventDefault();
    console.log(`Add point to ${e.target.value}`);
  };

  const handleSubtract = (e) => {
    e.preventDefault();
    console.log(`Subtract point from ${e.target.value}`);
  };

  // const { name: nameOne, touchesScored: touchesOne, id: idOne } = partOne;
  // const { name: nameTwo, touchesScored: touchesTwo, id: idTwo } = partTwo;

  return (
    <div>
      <p>Scoreboard</p>
      {/* <div className="left">
        <p>Name: {nameOne}</p>
        <p>Touches: {touchesOne}</p>
        <button onClick={handleSubtract} value={idOne}>
          -
        </button>
        <button onClick={handleAdd} value={idOne}>
          +
        </button>
      </div>
      <div className="right">
        <p>Name: {nameTwo}</p>
        <p>Touches: {touchesTwo}</p>
        <button>-</button>
        <button>+</button>
      </div> */}
    </div>
  );
}

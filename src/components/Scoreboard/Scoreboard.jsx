import React, { useEffect } from 'react';
import { usePart } from '../../context/PartContext';
import { useList } from '../../context/PartListContext';

// Remove setBout from context hook after connect to the numbered components
export default function Scoreboard() {
  const { list } = useList();
  const { bout, partOne, setPartOne, partTwo, setPartTwo } = usePart();

  // Set up function to grab participant objects from list based on id returned from numbered component
  useEffect(() => {
    const fetchFencers = () => {
      list.map((l) => {
        if (l.id === bout[0]) {
          setPartOne(l);
        }
        if (l.id === bout[1]) {
          setPartTwo(l);
        }
      });
    };
    fetchFencers();
    // setPartOne(bout[0]);
  }, [bout, list, setPartOne, setPartTwo]);

  const handleAdd = (e) => {
    if (e.target.value === partOne.id) {
      setPartOne({
        ...partOne,
        touchesScored: partOne.touchesScored + 1,
      });
      setPartTwo({
        ...partTwo,
        touchesReceived: partTwo.touchesReceived + 1,
      });
    } else {
      setPartOne({
        ...partOne,
        touchesReceived: partOne.touchesReceived + 1,
      });
      setPartTwo({
        ...partTwo,
        touchesScored: partTwo.touchesScored + 1,
      });
    }
  };

  const handleSubtract = (e) => {
    if (e.target.value === partOne.id) {
      setPartOne({
        ...partOne,
        touchesScored: partOne.touchesScored - 1,
      });
      setPartTwo({
        ...partTwo,
        touchesReceived: partTwo.touchesReceived - 1,
      });
    } else {
      setPartOne({
        ...partOne,
        touchesReceived: partOne.touchesReceived - 1,
      });
      setPartTwo({
        ...partTwo,
        touchesScored: partTwo.touchesScored - 1,
      });
    }
  };

  // The following will be calculated at the end of a bout, in a handleFinish function

  // setPartOne({ ...partOne, indicator: partOne.touchesScored - partOne.touchesReceived });
  // setPartTwo({ ...partTwo, indicator: partTwo.touchesScored - partTwo.touchesReceived });

  const { name: nameOne, touchesScored: touchesOne, id: idOne } = partOne;
  const { name: nameTwo, touchesScored: touchesTwo, id: idTwo } = partTwo;

  return (
    <div>
      <p>Scoreboard</p>
      <div className="left">
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
        <button onClick={handleSubtract} value={idTwo}>
          -
        </button>
        <button onClick={handleAdd} value={idTwo}>
          +
        </button>
      </div>
    </div>
  );
}

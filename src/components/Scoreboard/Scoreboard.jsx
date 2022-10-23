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
  }, [bout, list, setPartOne, setPartTwo]);

  // Realized I need to add a key to the fencers to account for current bout touches vs total tournament touches

  const handleAdd = (e) => {
    if (e.target.value === partOne.id) {
      setPartOne({
        ...partOne,
        touchesCurrent: partOne.touchesCurrent + 1,
      });
    } else {
      setPartTwo({
        ...partTwo,
        touchesCurrent: partTwo.touchesCurrent + 1,
      });
    }
  };

  const handleSubtract = (e) => {
    if (e.target.value === partOne.id) {
      setPartOne({
        ...partOne,
        touchesCurrent: partOne.touchesCurrent - 1,
      });
    } else {
      setPartTwo({
        ...partTwo,
        touchesCurrent: partTwo.touchesCurrent - 1,
      });
    }
  };

  // The following will be calculated at the end of a bout, in a handleFinish function

  const handleFinish = () => {
    const indicatorOne = partOne.indicator + partOne.touchesCurrent - partTwo.touchesCurrent;
    const indicatorTwo = partTwo.indicator + partTwo.touchesCurrent - partOne.touchesCurrent;
    const receivedOne = partOne.indicator + partTwo.touchesCurrent;
    const receivedTwo = partTwo.indicator + partOne.touchesCurrent;
  };

  const { name: nameOne, touchesCurrent: touchesOne, id: idOne } = partOne;
  const { name: nameTwo, touchesCurrent: touchesTwo, id: idTwo } = partTwo;

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
      <button onClick={handleFinish}>Finish Bout</button>
    </div>
  );
}

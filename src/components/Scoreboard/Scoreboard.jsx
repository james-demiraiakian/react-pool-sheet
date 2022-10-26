import React, { useEffect } from 'react';
import { usePart } from '../../context/PartContext';
import { useList } from '../../context/PartListContext';

// Remove setBout from context hook after connect to the numbered components
export default function Scoreboard() {
  const { list, setList } = useList();
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

  const handleFinish = () => {
    const indicatorOne = partOne.indicator + partOne.touchesCurrent - partTwo.touchesCurrent;
    const indicatorTwo = partTwo.indicator + partTwo.touchesCurrent - partOne.touchesCurrent;
    const scoredOne = partOne.touchesScored + partOne.touchesCurrent;
    const scoredTwo = partTwo.touchesScored + partTwo.touchesCurrent;
    const receivedOne = partOne.touchesReceived + partTwo.touchesCurrent;
    const receivedTwo = partTwo.touchesReceived + partOne.touchesCurrent;

    setPartOne({
      ...partOne,
      indicator: indicatorOne,
      touchesScored: scoredOne,
      touchesReceived: receivedOne,
      touchesCurrent: 0,
    });
    setPartTwo({
      ...partTwo,
      indicator: indicatorTwo,
      touchesScored: scoredTwo,
      touchesReceived: receivedTwo,
      touchesCurrent: 0,
    });
  };

  useEffect(() => {
    const newList = [];
    list.map((l) => {
      console.log(l);
      if (l.id === partOne.id) {
        l = partOne;
      }
      if (l.id === partTwo.id) {
        l = partTwo;
      }
      newList.push(l);
    });
    console.log(newList);
    setList(newList);
  }, [partOne, partTwo]);

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

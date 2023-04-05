import React from 'react';
import { usePart } from '../../context/PartContext';
import { useList } from '../../context/PartListContext';

export default function BoutLoop(array) {
  const { list } = useList();
  const { setActiveBout, partOne, partTwo } = usePart();
  const { arr } = array;

  // Flawed. Will need to refactor the hotseat switching, and state values.
  // Consider having the current [bout, setBout] state become [activeBout, setActiveBout].
  // Then have a [bouts, setBouts] state that is instantiated with all the possible bout combinations.
  // When a bout is selected, it's pulled from bouts, and put into setActiveBout.
  // bouts and activeBouts can track current touches, and can be used to hotseat switch between bouts without mixing scores...

  console.log(list);

  const handleClick = (num) => {
    if (!partOne.name || !partTwo.name) {
      setActiveBout([list[num[0]].id, list[num[1]].id]);
    } else if (partOne.touchesCurrent !== 0) {
      alert(
        `${partOne.name} is already in a bout. Fencers cannot be in more than one active bout.`
      );
    } else if (partTwo.touchesCurrent !== 0) {
      alert(
        `${partTwo.name} is already in a bout. Fencers cannot be in more than one active bout.`
      );
    } else {
      setActiveBout([list[num[0]].id, list[num[1]].id]);
    }
  };

  return (
    <div>
      {arr.map((num, i) => (
        <button key={i} onClick={() => handleClick(num)}>
          {list[num[0]].name} vs {list[num[1]].name}
        </button>
      ))}
    </div>
  );
}

import React from 'react';
import { usePart } from '../../context/PartContext';
import { useList } from '../../context/PartListContext';

export default function BoutLoop(array) {
  const { list } = useList();
  const { setBout, partOne, partTwo } = usePart();
  const { arr } = array;

  const handleClick = (num) => {
    if (!partOne.name || !partTwo.name) {
      setBout([list[num[0]].id, list[num[1]].id]);
    } else if (partOne.touchesCurrent !== 0) {
      alert(
        `${partOne.name} is already in a bout. Fencers cannot be in more than one active bout.`
      );
    } else if (partTwo.touchesCurrent !== 0) {
      alert(
        `${partTwo.name} is already in a bout. Fencers cannot be in more than one active bout.`
      );
    } else {
      setBout([list[num[0]].id, list[num[1]].id]);
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

import React, { useEffect } from 'react';
import { usePart } from '../../context/PartContext';
import { useList } from '../../context/PartListContext';

// Remove setBout from context hook after connect to the numbered components
export default function Scoreboard() {
  const { list, setList } = useList();
  const { bout, setBout, partOne, setPartOne, partTwo, setPartTwo } = usePart();

  // Set bout will be removed from here, and will be set from numbered components, on click.
  useEffect(() => {
    setBout([list[0], list[1]]);
    setPartOne(bout[0]);
    setPartTwo(bout[1]);
  }, [list]);

  const { name: nameOne, touchesScored: touchesOne } = partOne;
  const { name: nameTwo, touchesScored: touchesTwo } = partTwo;

  return (
    <div>
      <p>Scoreboard</p>
      <div className="left">
        <p>Name: {nameOne}</p>
        <p>Touches: {touchesOne}</p>
      </div>
      <div className="right">
        <p>Name: {nameTwo}</p>
        <p>Touches: {touchesTwo}</p>
      </div>
    </div>
  );
}

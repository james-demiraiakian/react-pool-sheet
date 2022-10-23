import React from 'react';
import { usePart } from '../../context/PartContext';
import { useList } from '../../context/PartListContext';

export default function BoutLoop(array) {
  const { list } = useList();
  const { setBout } = usePart();
  const { arr } = array;

  return (
    <div>
      {arr.map((num, i) => (
        <button key={i} onClick={() => setBout([list[num[0]].id, list[num[1]].id])}>
          {list[num[0]].name} vs {list[num[1]].name}
        </button>
      ))}
    </div>
  );
}

import React, { useEffect } from 'react';
import { usePart } from '../../context/PartContext';
import { useList } from '../../context/PartListContext';

export default function Four() {
  const { list } = useList();
  const { setBout } = usePart();

  return (
    <div>
      <button onClick={() => setBout([list[0].id, list[3].id])}>
        {list[0].name} vs {list[3].name}
      </button>
      <button onClick={() => setBout([list[1].id, list[2].id])}>
        {list[1].name} vs {list[2].name}
      </button>
      <button onClick={() => setBout([list[0].id, list[2].id])}>
        {list[0].name} vs {list[2].name}
      </button>
      <button onClick={() => setBout([list[1].id, list[3].id])}>
        {list[1].name} vs {list[3].name}
      </button>
      <button onClick={() => setBout([list[2].id, list[3].id])}>
        {list[2].name} vs {list[3].name}
      </button>
      <button onClick={() => setBout([list[0].id, list[1].id])}>
        {list[0].name} vs {list[1].name}
      </button>
    </div>
  );
}

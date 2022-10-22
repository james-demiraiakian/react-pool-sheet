import React from 'react';
import { usePart } from '../../context/PartContext';
import { useList } from '../../context/PartListContext';

export default function Six() {
  const { list } = useList();
  const { setBout } = usePart();
  return (
    <div>
      <button onClick={() => setBout([list[0].id, list[1].id])}>
        {list[0].name} vs {list[1].name}
      </button>
      <button onClick={() => setBout([list[3].id, list[4].id])}>
        {list[3].name} vs {list[4].name}
      </button>
      <button onClick={() => setBout([list[1].id, list[2].id])}>
        {list[1].name} vs {list[2].name}
      </button>
      <button onClick={() => setBout([list[4].id, list[5].id])}>
        {list[4].name} vs {list[5].name}
      </button>
      <button onClick={() => setBout([list[2].id, list[0].id])}>
        {list[2].name} vs {list[0].name}
      </button>
      <button onClick={() => setBout([list[5].id, list[3].id])}>
        {list[5].name} vs {list[3].name}
      </button>
      <button onClick={() => setBout([list[1].id, list[4].id])}>
        {list[1].name} vs {list[4].name}
      </button>
      <button onClick={() => setBout([list[0].id, list[3].id])}>
        {list[0].name} vs {list[3].name}
      </button>
      <button onClick={() => setBout([list[4].id, list[2].id])}>
        {list[4].name} vs {list[2].name}
      </button>
      <button onClick={() => setBout([list[0].id, list[5].id])}>
        {list[0].name} vs {list[5].name}
      </button>
      <button onClick={() => setBout([list[3].id, list[1].id])}>
        {list[3].name} vs {list[1].name}
      </button>
      <button onClick={() => setBout([list[2].id, list[5].id])}>
        {list[2].name} vs {list[5].name}
      </button>
      <button onClick={() => setBout([list[4].id, list[0].id])}>
        {list[4].name} vs {list[0].name}
      </button>
      <button onClick={() => setBout([list[2].id, list[3].id])}>
        {list[2].name} vs {list[3].name}
      </button>
      <button onClick={() => setBout([list[5].id, list[1].id])}>
        {list[5].name} vs {list[1].name}
      </button>
    </div>
  );
}

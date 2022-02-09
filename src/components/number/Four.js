import React from 'react';
import { useList } from '../../context/PartListContext';

export default function Four() {
  const { list } = useList();
  return (
    <div>
      <div>
        {list[0].name} vs {list[3].name}
      </div>
      <div>
        {list[1].name} vs {list[2].name}
      </div>
      <div>
        {list[0].name} vs {list[2].name}
      </div>
      <div>
        {list[1].name} vs {list[3].name}
      </div>
      <div>
        {list[2].name} vs {list[3].name}
      </div>
      <div>
        {list[0].name} vs {list[1].name}
      </div>
    </div>
  );
}

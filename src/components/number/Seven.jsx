import React from 'react';
import { useList } from '../../context/PartListContext';

export default function Seven() {
  const { list } = useList();
  return (
    <div>
      <div>
        {list[0].name} vs {list[3].name}
      </div>
      <div>
        {list[1].name} vs {list[4].name}
      </div>
      <div>
        {list[2].name} vs {list[5].name}
      </div>
      <div>
        {list[6].name} vs {list[0].name}
      </div>
      <div>
        {list[4].name} vs {list[3].name}
      </div>
      <div>
        {list[1].name} vs {list[2].name}
      </div>
      <div>
        {list[5].name} vs {list[6].name}
      </div>
      <div>
        {list[4].name} vs {list[0].name}
      </div>
      <div>
        {list[3].name} vs {list[2].name}
      </div>
      <div>
        {list[5].name} vs {list[1].name}
      </div>
      <div>
        {list[4].name} vs {list[6].name}
      </div>
      <div>
        {list[2].name} vs {list[0].name}
      </div>
      <div>
        {list[3].name} vs {list[5].name}
      </div>
      <div>
        {list[6].name} vs {list[1].name}
      </div>
      <div>
        {list[2].name} vs {list[4].name}
      </div>
      <div>
        {list[0].name} vs {list[5].name}
      </div>
      <div>
        {list[1].name} vs {list[3].name}
      </div>
      <div>
        {list[6].name} vs {list[2].name}
      </div>
      <div>
        {list[5].name} vs {list[4].name}
      </div>
      <div>
        {list[0].name} vs {list[1].name}
      </div>
      <div>
        {list[3].name} vs {list[6].name}
      </div>
    </div>
  );
}

import React from 'react';
import { useList } from '../../context/PartListContext';
import Four from '../number/Four';
import Five from '../number/Five';
import Six from '../number/Six';
import Seven from '../number/Seven';
import Eight from '../number/Eight';
import Nine from '../number/Nine';
import Ten from '../number/Ten';
import Eleven from '../number/Eleven';
import Twelve from '../number/Twelve';
import Scoreboard from '../Scoreboard/Scoreboard';

export default function Match() {
  const { list } = useList();
  const length = list.length;
  let number;
  switch (length) {
    case 4:
      number = <Four />;
      break;
    case 5:
      number = <Five />;
      break;
    case 6:
      number = <Six />;
      break;
    case 7:
      number = <Seven />;
      break;
    case 8:
      number = <Eight />;
      break;
    case 9:
      number = <Nine />;
      break;
    case 10:
      number = <Ten />;
      break;
    case 11:
      number = <Eleven />;
      break;
    case 12:
      number = <Twelve />;
      break;
    default:
      break;
  }
  return (
    <div>
      {number}
      <Scoreboard />
    </div>
  );
}

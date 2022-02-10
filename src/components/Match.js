import React from 'react';
import { useList } from '../context/PartListContext';
import Four from './number/Four';
import Five from './number/Five';
import Six from './number/Six';
import Seven from './number/Seven';
import Eight from './number/Eight';
import Nine from './number/Nine';
import Ten from './number/Ten';
import Eleven from './number/Eleven';
import Twelve from './number/Twelve';

export default function Match() {
  const { list } = useList();
  const length = list.length;

  switch (length) {
    case 4:
      return <Four />;
    case 5:
      return <Five />;
    case 6:
      return <Six />;
    case 7:
      return <Seven />;
    case 8:
      return <Eight />;
    case 9:
      return <Nine />;
    case 10:
      return <Ten />;
    case 11:
      return <Eleven />;
    case 12:
      return <Twelve />;
    default:
      break;
  }
  return <div>Match</div>;
}

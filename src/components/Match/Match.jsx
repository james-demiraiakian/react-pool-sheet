import React from 'react';
import { useList } from '../../context/PartListContext';
import BoutLoop from '../BoutLoop/BoutLoop';
import { four } from '../number/four';
import { five } from '../number/five';
import { six } from '../number/six';
import { seven } from '../number/seven';
import { eight } from '../number/eight';
import { nine } from '../number/nine';
import { ten } from '../number/ten';
import { eleven } from '../number/eleven';
import { twelve } from '../number/twelve';

export default function Match() {
  const { list } = useList();
  const length = list.length;
  let number;
  switch (length) {
    case 4:
      number = <BoutLoop arr={four} />;
      break;
    case 5:
      number = <BoutLoop arr={five} />;
      break;
    case 6:
      number = <BoutLoop arr={six} />;
      break;
    case 7:
      number = <BoutLoop arr={seven} />;
      break;
    case 8:
      number = <BoutLoop arr={eight} />;
      break;
    case 9:
      number = <BoutLoop arr={nine} />;
      break;
    case 10:
      number = <BoutLoop arr={ten} />;
      break;
    case 11:
      number = <BoutLoop arr={eleven} />;
      break;
    case 12:
      number = <BoutLoop arr={twelve} />;
      break;
    default:
      break;
  }
  return <div>{number}</div>;
}

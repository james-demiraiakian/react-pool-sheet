import React, { useEffect, useState } from 'react';
import { useFencing } from '../../../context/FencingContext';
import { getFencerById } from '../../../services/fencers';

export default function BoutItem({ bout }) {
  const { getFencers } = useFencing();
  const [fencerOne, setFencerOne] = useState({});
  const [fencerTwo, setFencerTwo] = useState({});

  useEffect(() => {
    const fetch = async (id) => {
      const res = await getFencerById(id);
      return res;
    };
  });

  return <div>{`${bout[0]} vs ${bout[1]}`}</div>;
}

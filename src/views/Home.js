import React from 'react';
import ParticipantList from '../components/ParticipantList';
import { PartListProvider } from '../context/PartListContext';

export default function Home() {
  return (
    <div>
      <PartListProvider>
        <ParticipantList />
      </PartListProvider>
    </div>
  );
}

import React from 'react';
import ParticipantList from '../../components/ParticipantList/ParticipantList';
import { PartListProvider } from '../../context/PartListContext';
import './Home.css';

export default function Home() {
  return (
    <div className="home">
      <PartListProvider>
        <ParticipantList />
      </PartListProvider>
    </div>
  );
}

import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home">
      Select a thing to do
      <Link to={'/createTournament'}>Create Tournament</Link>
      <Link to={'/tournamentList'}>Tournament List</Link>
    </div>
  );
}
